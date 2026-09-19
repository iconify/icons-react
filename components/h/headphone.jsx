import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfulkybuw.css';
import '../../css/m/mw8n7vbhg.css';
import '../../css/f/f_ci496jc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfulkybuw"/><path class="mw8n7vbhg"/><path class="f_ci496jc"/></g>`,
		"fallback": "fluent-emoji-flat:headphone",
	});
}

export default Component;
