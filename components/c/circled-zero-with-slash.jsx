import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_weg3b7j.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/g/goyqnobna.css';
import '../../css/r/r38bcib6d.css';
import '../../css/u/uhe3f6bup.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j_weg3b7j"/><g class="sxsjrzbyv"><circle class="goyqnobna"/><path class="r38bcib6d"/><path clip-rule="evenodd" class="uhe3f6bup"/></g>`,
		"fallback": "openmoji:circled-zero-with-slash",
	});
}

export default Component;
