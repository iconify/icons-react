import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/l/le0f1-32h.css';
import '../../css/s/slmdhsbqf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="le0f1-32h"/><path class="slmdhsbqf"/></g>`,
		"fallback": "system-uicons:bag",
	});
}

export default Component;
