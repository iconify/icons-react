import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y87cecb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y87cecb_u"/>`,
		"fallback": "grommet-icons:download-option",
	});
}

export default Component;
