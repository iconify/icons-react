import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_o0smb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_o0smb-o"/>`,
		"fallback": "heroicons:arrow-left-end-on-rectangle-solid",
	});
}

export default Component;
