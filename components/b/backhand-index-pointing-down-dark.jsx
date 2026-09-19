import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrcti13wy.css';
import '../../css/f/f3ss-615i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrcti13wy"/><path clip-rule="evenodd" class="f3ss-615i"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-down-dark",
	});
}

export default Component;
