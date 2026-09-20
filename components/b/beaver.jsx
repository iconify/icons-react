import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibafe3iko.css';
import '../../css/h/h02blnj9b.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/u0cmkeodx.css';
import '../../css/e/erv6rqbpa.css';
import '../../css/u/ub-aomhiq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibafe3iko"/><path class="h02blnj9b"/><g class="jn8qy4bru"><path class="u0cmkeodx"/><path class="erv6rqbpa"/><path class="ub-aomhiq"/></g>`,
		"fallback": "openmoji:beaver",
	});
}

export default Component;
