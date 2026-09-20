import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9y-gkoam.css';
import '../../css/x/x5lpvmlvk.css';
import '../../css/y/yhvy4lkom.css';
import '../../css/p/psvnbab7k.css';
import '../../css/d/dd7-ubcex.css';
import '../../css/g/g1vwf5buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9y-gkoam"/><path class="x5lpvmlvk"/><path class="yhvy4lkom"/><path class="psvnbab7k"/><path class="dd7-ubcex"/><path class="g1vwf5buo"/></g>`,
		"fallback": "solar:clapperboard-text-bold-duotone",
	});
}

export default Component;
