import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul1klabpw.css';
import '../../css/c/cdnlc083p.css';
import '../../css/x/xtsw08b-e.css';
import '../../css/i/iw-r3fb9w.css';
import '../../css/w/wddimfb2l.css';
import '../../css/h/h3ex0nbpz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ul1klabpw"/><path class="cdnlc083p"/><path class="xtsw08b-e"/><path class="iw-r3fb9w"/><path class="wddimfb2l"/><path class="h3ex0nbpz"/></g>`,
		"fallback": "fluent-emoji-flat:desert-island",
	});
}

export default Component;
