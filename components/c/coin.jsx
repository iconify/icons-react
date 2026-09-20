import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/ihzi3cc6z.css';
import '../../css/b/bqg2wqb9b.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="ihzi3cc6z"/><path class="bqg2wqb9b"/></g>`,
		"fallback": "system-uicons:coin",
	});
}

export default Component;
