import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/u/u8xc5ebwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="m4l-9ybuj"/><circle class="aqhok2bbj"/><path class="u8xc5ebwy"/></g>`,
		"fallback": "lets-icons:doughnut-chart-light",
	});
}

export default Component;
