import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';
import '../../css/c/cdmugmbto.css';
import '../../css/p/plruuob3l.css';
import '../../css/f/fugwt2b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="t4qaumccy"/><path class="cdmugmbto"/><path class="plruuob3l"/><path class="fugwt2b4j"/></g>`,
		"fallback": "solar:file-chart-broken",
	});
}

export default Component;
