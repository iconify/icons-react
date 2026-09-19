import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii3k5cbmm.css';
import '../../css/u/ub2pb67pp.css';
import '../../css/x/x-344ld-n.css';
import '../../css/x/xft9p2bsj.css';
import '../../css/h/hj_8jfbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii3k5cbmm"/><path class="ub2pb67pp"/><path class="x-344ld-n"/><path class="xft9p2bsj"/><path class="hj_8jfbpw"/>`,
		"fallback": "fxemoji:bullhorn",
	});
}

export default Component;
