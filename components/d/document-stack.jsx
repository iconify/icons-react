import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/nbcrakb3b.css';
import '../../css/f/f6jh06l4x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="nbcrakb3b"/><path class="f6jh06l4x"/></g>`,
		"fallback": "system-uicons:document-stack",
	});
}

export default Component;
