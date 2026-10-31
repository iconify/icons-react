import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j4_nmj0ma.css';
import '../../css/n/nktcagb0b.css';
import '../../css/f/fi4q-dntr.css';
import '../../css/t/tba3_6bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j4_nmj0ma wm-shadow"/><path class="nktcagb0b wm-shadow"/><path class="fi4q-dntr"/><path class="tba3_6bfv"/></g>`,
		"fallback": "withicons-brutal:arrow-down",
	});
}

export default Component;
