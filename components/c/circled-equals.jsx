import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/u/usixe_b-y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><circle class="wcwvfmbxf"/><path clip-rule="evenodd" class="usixe_b-y"/></g>`,
		"fallback": "openmoji:circled-equals",
	});
}

export default Component;
