import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmjk-vj3s.css';
import '../../css/c/c45m9actk.css';
import '../../css/t/tvxcldbsv.css';
import '../../css/y/y97m3bylv.css';
import '../../css/c/cxrz_-ipi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wmjk-vj3s"/><path class="c45m9actk"/><path class="tvxcldbsv"/><path class="y97m3bylv"/><path class="cxrz_-ipi"/></g>`,
		"fallback": "fluent-emoji-flat:hatching-chick",
	});
}

export default Component;
