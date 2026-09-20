import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/t/tqk_3w0ab.css';
import '../../css/m/mlts5vbjj.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="tqk_3w0ab"/><path class="mlts5vbjj"/></g>`,
		"fallback": "streamline-stickies-color:bluetooth",
	});
}

export default Component;
