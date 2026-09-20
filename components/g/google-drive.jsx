import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq8p9nb-g.css';
import '../../css/i/ihjdqbbnc.css';
import '../../css/r/rdkbckboj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rq8p9nb-g"/><path class="ihjdqbbnc"/><path class="rdkbckboj"/></g>`,
		"fallback": "streamline-color:google-drive",
	});
}

export default Component;
