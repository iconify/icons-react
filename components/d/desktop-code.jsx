import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd82r34cq.css';
import '../../css/i/i6axgjb8x.css';
import '../../css/l/lxcy6w0ch.css';
import '../../css/f/fo3loe26b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jd82r34cq"/><path class="i6axgjb8x"/><path class="lxcy6w0ch"/><path class="fo3loe26b"/></g>`,
		"fallback": "streamline-color:desktop-code",
	});
}

export default Component;
