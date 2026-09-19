import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qppjm3p4v.css';
import '../../css/r/r_j9rqbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qppjm3p4v"/><path class="r_j9rqbbs"/></g>`,
		"fallback": "hugeicons:dress-05",
	});
}

export default Component;
