import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi45_8xpv.css';
import '../../css/a/a0s-sskmv.css';
import '../../css/z/z09z4kubi.css';
import '../../css/v/v7hhzpebe.css';
import '../../css/x/xud_5pb3j.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/o/olm-p1b2n.css';
import '../../css/r/rhsbz_msx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi45_8xpv"/><path class="a0s-sskmv"/><path class="z09z4kubi"/><path class="v7hhzpebe"/><path class="xud_5pb3j"/><g class="x8poo_bjf"><path class="olm-p1b2n"/><path class="rhsbz_msx"/></g>`,
		"fallback": "openmoji:ear-of-corn",
	});
}

export default Component;
