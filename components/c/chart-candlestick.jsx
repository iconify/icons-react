import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p2bs5ab3t.css';
import '../../css/m/msvi2ibgs.css';
import '../../css/s/soktzeb2c.css';
import '../../css/e/ez6xvo6mf.css';
import '../../css/s/saj09ob3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p2bs5ab3t wm-shadow"/><path class="msvi2ibgs"/><path class="soktzeb2c"/><path class="ez6xvo6mf"/><path class="saj09ob3b"/></g>`,
		"fallback": "withicons-retro:chart-candlestick",
	});
}

export default Component;
