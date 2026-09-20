import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l--oi22kl.css';
import '../../css/q/q7__kib4o.css';
import '../../css/x/x6y_sybsh.css';
import '../../css/q/qgfd6sb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l--oi22kl"/><path class="q7__kib4o"/><path class="x6y_sybsh"/><path class="qgfd6sb9e"/></g>`,
		"fallback": "tdesign:cpu",
	});
}

export default Component;
