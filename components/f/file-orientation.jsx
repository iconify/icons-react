import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdzxz2s5h.css';
import '../../css/f/fwajre3sq.css';
import '../../css/v/vw65ugqlg.css';
import '../../css/r/rvgip8e_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdzxz2s5h"/><path class="fwajre3sq"/><path class="vw65ugqlg"/><path class="rvgip8e_d"/></g>`,
		"fallback": "andrsrxn:file-orientation",
	});
}

export default Component;
