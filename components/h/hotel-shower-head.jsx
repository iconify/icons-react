import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kptdg-bhi.css';
import '../../css/q/qa76_-bbq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kptdg-bhi"/><path class="qa76_-bbq"/></g>`,
		"fallback": "streamline-color:hotel-shower-head",
	});
}

export default Component;
