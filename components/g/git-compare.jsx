import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qrtawli7r.css';
import '../../css/m/m928gw30o.css';
import '../../css/h/h18lq-uwn.css';
import '../../css/r/r960vvbkq.css';
import '../../css/r/ru2xuom4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qrtawli7r wm-shadow"/><path class="m928gw30o wm-shadow"/><path class="h18lq-uwn"/><path class="r960vvbkq"/><path class="ru2xuom4w"/></g>`,
		"fallback": "withicons-brutal:git-compare",
	});
}

export default Component;
