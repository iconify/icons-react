import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/r/reogukpic.css';
import '../../css/v/vuk3x7xtu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><circle class="wcwvfmbxf"/><path class="reogukpic"/><path class="vuk3x7xtu"/></g>`,
		"fallback": "openmoji:circled-dollar-sign-with-overlaid-backslash",
	});
}

export default Component;
