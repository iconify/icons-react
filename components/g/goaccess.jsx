import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e94lhypgc.css';
import '../../css/f/fu1vy-bjm.css';
import '../../css/h/ha7cn8b9z.css';
import '../../css/b/biyanj8yo.css';
import '../../css/z/zsm7q2_fn.css';
import '../../css/u/uxq2iwutk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e94lhypgc"/><path class="fu1vy-bjm"/><path class="ha7cn8b9z"/><path class="biyanj8yo"/><path class="zsm7q2_fn"/><path class="uxq2iwutk"/>`,
		"fallback": "selfhst:goaccess",
	});
}

export default Component;
