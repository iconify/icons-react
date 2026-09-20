import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/g/gbci9hyta.css';
import '../../css/e/ej0drdrvm.css';
import '../../css/j/jiw1pkbmf.css';
import '../../css/q/qfb0low_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="gbci9hyta"/><path class="ej0drdrvm"/><path class="jiw1pkbmf"/><path class="qfb0low_q"/></g>`,
		"fallback": "solar:cassette-linear",
	});
}

export default Component;
