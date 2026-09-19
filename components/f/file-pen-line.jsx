import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/id2bewgua.css';
import '../../css/j/jypc2sbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="id2bewgua"/><path class="jypc2sbxp"/></g>`,
		"fallback": "hugeicons:file-pen-line",
	});
}

export default Component;
