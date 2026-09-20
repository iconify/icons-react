import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/h/htb05oy9r.css';
import '../../css/p/pjswgzlnc.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="htb05oy9r"/><path class="pjswgzlnc"/></g>`,
		"fallback": "system-uicons:folder-open",
	});
}

export default Component;
