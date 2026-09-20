import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x0q6h9bqn.css';
import '../../css/p/p9c0hjbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x0q6h9bqn"/><path class="p9c0hjbwt"/></g>`,
		"fallback": "solar:alt-arrow-right-line-duotone",
	});
}

export default Component;
