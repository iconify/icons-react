import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/o/oxu7ssb6t.css';
import '../../css/r/rpwsk1b3a.css';
import '../../css/v/v5ok5cbpt.css';
import '../../css/b/blqnr7muq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="oxu7ssb6t"/><path class="rpwsk1b3a"/><path class="v5ok5cbpt"/><path class="blqnr7muq"/></g>`,
		"fallback": "withicons-retro:calendar-x",
	});
}

export default Component;
