import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/emph6bbay.css';
import '../../css/q/q7xl0t2wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="emph6bbay"/><path class="q7xl0t2wz"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-form-drop-down-menu-form-3",
	});
}

export default Component;
