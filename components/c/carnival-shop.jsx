import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j425y2b-h.css';
import '../../css/y/y6hr7bcjz.css';
import '../../css/t/tg4es0buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j425y2b-h"/><path class="y6hr7bcjz"/><path class="tg4es0buh"/></g>`,
		"fallback": "streamline-ultimate:carnival-shop",
	});
}

export default Component;
