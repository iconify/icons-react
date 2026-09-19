import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yixzgdgwh.css';
import '../../css/d/diznkek8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yixzgdgwh"/><path class="diznkek8n"/></g>`,
		"fallback": "hugeicons:entrance-stairs",
	});
}

export default Component;
