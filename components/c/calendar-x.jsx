import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/e/eokbydxyv.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/k/kdgmqabyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="eokbydxyv"/><path class="ghfhivbgc"/><path class="kdgmqabyh"/></g>`,
		"fallback": "withicons-brutal:calendar-x",
	});
}

export default Component;
