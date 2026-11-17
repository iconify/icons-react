import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qsfl0x_5q.css';
import '../../css/w/wq22pjb6x.css';
import '../../css/e/es9oqf1rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qsfl0x_5q"/><path class="wq22pjb6x"/><path class="es9oqf1rg"/></g>`,
		"fallback": "matita:circle-arrow-left",
	});
}

export default Component;
