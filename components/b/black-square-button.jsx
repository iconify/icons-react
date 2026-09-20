import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn08ad5pw.css';
import '../../css/l/lrtuiw7ei.css';
import '../../css/c/c5qy8m2mi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mxa7kfbgt.css';
import '../../css/i/iknetdbmw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dn08ad5pw"/><path clip-rule="evenodd" class="lrtuiw7ei"/><path class="c5qy8m2mi"/><g class="jn8qy4bru"><path class="mxa7kfbgt"/><path class="iknetdbmw"/></g>`,
		"fallback": "openmoji:black-square-button",
	});
}

export default Component;
