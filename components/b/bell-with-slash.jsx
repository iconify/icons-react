import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/c/c1u0_abqq.css';
import '../../css/n/nmze_d0oz.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/aanq2fbvr.css';
import '../../css/a/aljrffe2q.css';
import '../../css/g/g839bqybe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><circle class="c1u0_abqq"/><path class="nmze_d0oz"/></g><g class="jn8qy4bru"><path class="aanq2fbvr"/><path class="aljrffe2q"/><path class="g839bqybe"/></g>`,
		"fallback": "openmoji:bell-with-slash",
	});
}

export default Component;
