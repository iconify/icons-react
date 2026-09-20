import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-i_ixbbl.css';
import '../../css/j/jw15u954h.css';
import '../../css/y/y6wihgbap.css';
import '../../css/b/brnax_b_s.css';
import '../../css/q/qpzazmb2g.css';
import '../../css/a/aw1r_hjfy.css';
import '../../css/x/xs0j_8vqa.css';
import '../../css/z/z04drlb1l.css';
import '../../css/g/gdc-8fbby.css';
import '../../css/w/we5ohccym.css';
import '../../css/z/z11q6l4cf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-i_ixbbl"/><path class="jw15u954h"/><path class="y6wihgbap"/><g class="brnax_b_s"><path class="qpzazmb2g"/><path class="aw1r_hjfy"/><path class="xs0j_8vqa"/></g><g class="z04drlb1l"><path class="gdc-8fbby"/><path class="we5ohccym"/><path class="z11q6l4cf"/></g>`,
		"fallback": "openmoji:authority-instruction",
	});
}

export default Component;
