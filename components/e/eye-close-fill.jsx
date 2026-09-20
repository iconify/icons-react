import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwoycbc_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwoycbc_f"/>`,
		"fallback": "mingcute:eye-close-fill",
	});
}

export default Component;
