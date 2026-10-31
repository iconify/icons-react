import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tddl24bqp.css';
import '../../css/g/g5wy8tb4y.css';
import '../../css/k/kvjcaymdv.css';
import '../../css/j/jsxg4l9cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tddl24bqp wm-shadow"/><path class="g5wy8tb4y wm-shadow"/><path class="kvjcaymdv"/><path class="jsxg4l9cg"/></g>`,
		"fallback": "withicons-brutal:brain",
	});
}

export default Component;
