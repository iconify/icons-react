import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8c9xvb5c.css';
import '../../css/j/j-we4za-r.css';
import '../../css/s/sno-j09lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8c9xvb5c"/><path class="j-we4za-r"/><path class="sno-j09lk"/></g>`,
		"fallback": "majesticons:coins",
	});
}

export default Component;
