import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtpw16buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtpw16buj"/>`,
		"fallback": "mingcute:engine-fill",
	});
}

export default Component;
