import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oke2z0zmw.css';
import '../../css/n/nucwd3bqb.css';
import '../../css/k/k4p8h_hqp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oke2z0zmw"/><path class="nucwd3bqb"/><path class="k4p8h_hqp"/>`,
		"fallback": "fxemoji:growingheart",
	});
}

export default Component;
