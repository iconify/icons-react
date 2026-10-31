import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mwputlbfe.css';
import '../../css/u/uzvsd5btx.css';
import '../../css/g/g-mr5gb2b.css';
import '../../css/l/lt6_d_vnp.css';
import '../../css/v/vjpc1gbig.css';
import '../../css/m/mtriq144g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mwputlbfe wm-shadow"/><path class="uzvsd5btx"/><path class="g-mr5gb2b"/><path class="lt6_d_vnp"/><path class="vjpc1gbig"/><path class="mtriq144g"/></g>`,
		"fallback": "withicons-retro:archive",
	});
}

export default Component;
