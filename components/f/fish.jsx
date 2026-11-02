import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tq4iw64sa.css';
import '../../css/h/h_q57btlx.css';
import '../../css/i/io9aq7bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tq4iw64sa"/><path class="h_q57btlx"/><path class="io9aq7bmh"/></g>`,
		"fallback": "matita:fish",
	});
}

export default Component;
