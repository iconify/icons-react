import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_weg3b7j.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/d/d0bf9jbax.css';
import '../../css/g/goyqnobna.css';
import '../../css/r/reogukpic.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j_weg3b7j"/><g class="sxsjrzbyv"><path clip-rule="evenodd" class="d0bf9jbax"/><circle class="goyqnobna"/><path class="reogukpic"/></g>`,
		"fallback": "openmoji:circled-c-with-overlaid-backslash",
	});
}

export default Component;
