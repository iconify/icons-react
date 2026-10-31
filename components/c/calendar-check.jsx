import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/i/iuki8fwvi.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/j/jqyhhcboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="iuki8fwvi"/><path class="ghfhivbgc"/><path class="jqyhhcboa"/></g>`,
		"fallback": "withicons-brutal:calendar-check",
	});
}

export default Component;
