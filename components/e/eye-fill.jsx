import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz3_bd5iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qz3_bd5iw"/>`,
		"fallback": "si:eye-fill",
	});
}

export default Component;
