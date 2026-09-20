import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dfv8mxble.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/g/ga-ta5brg.css';
import '../../css/x/x-swg81on.css';
import '../../css/n/nttuc_cwh.css';
import '../../css/z/z3u2exgxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dfv8mxble"/><path class="xl-jlp1rp"/><path class="hq-5njbjh"/><path class="ga-ta5brg"/><path class="x-swg81on"/><path class="nttuc_cwh"/><path class="z3u2exgxi"/></g>`,
		"fallback": "solar:boombox-linear",
	});
}

export default Component;
