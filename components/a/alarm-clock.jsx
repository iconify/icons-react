import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/ngolkzb7r.css';
import '../../css/j/j5rvl2b5l.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="ngolkzb7r"/><path class="j5rvl2b5l"/></g>`,
		"fallback": "system-uicons:alarm-clock",
	});
}

export default Component;
