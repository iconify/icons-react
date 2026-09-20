import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/k/koxsbff5h.css';
import '../../css/v/vyc3gp59a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><circle class="wcwvfmbxf"/><path class="koxsbff5h"/><path clip-rule="evenodd" class="vyc3gp59a"/></g>`,
		"fallback": "openmoji:circled-anticlockwise-arrow",
	});
}

export default Component;
