import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qjvj2ib0t.css';
import '../../css/t/tzhb1vbig.css';
import '../../css/w/wnz0iqbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qjvj2ib0t"/><path class="tzhb1vbig wm-a"/><path class="wnz0iqbyf"/></g>`,
		"fallback": "withicons:chart-candlestick-duo",
	});
}

export default Component;
