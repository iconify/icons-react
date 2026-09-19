import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-ahjfb0g.css';
import '../../css/y/ydy6h4gep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y-ahjfb0g"/><circle class="ydy6h4gep"/></g>`,
		"fallback": "charm:at-sign",
	});
}

export default Component;
