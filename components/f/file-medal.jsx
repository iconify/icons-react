import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdn11nisd.css';
import '../../css/r/r_oebub4u.css';
import '../../css/g/ga-p-vblj.css';
import '../../css/v/vgpr6_skd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jdn11nisd"/><path class="r_oebub4u"/><path class="ga-p-vblj"/><path class="vgpr6_skd"/></g>`,
		"fallback": "andrsrxn:file-medal",
	});
}

export default Component;
