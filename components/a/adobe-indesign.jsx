import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qy4pgcc_r.css';
import '../../css/u/u6e-1wbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qy4pgcc_r"/><path class="u6e-1wbnb"/></g>`,
		"fallback": "iconoir:adobe-indesign",
	});
}

export default Component;
