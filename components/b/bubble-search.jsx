import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6inds_nn.css';
import '../../css/b/bx75ttivl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q6inds_nn"/><path class="bx75ttivl"/></g>`,
		"fallback": "iconoir:bubble-search",
	});
}

export default Component;
