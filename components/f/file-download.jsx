import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/e/et1cq6y1f.css';
import '../../css/f/f3_4zuk_q.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="et1cq6y1f"/><path class="f3_4zuk_q"/></g>`,
		"fallback": "system-uicons:file-download",
	});
}

export default Component;
