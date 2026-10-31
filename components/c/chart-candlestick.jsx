import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d2kju4cpp.css';
import '../../css/t/thamkpbss.css';
import '../../css/k/klofeg8-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d2kju4cpp wm-shadow"/><path class="thamkpbss wm-shadow"/><path class="klofeg8-w"/></g>`,
		"fallback": "withicons-brutal:chart-candlestick",
	});
}

export default Component;
