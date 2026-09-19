import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q67lela2z.css';
import '../../css/e/etm45wn7e.css';
import '../../css/i/iln4v0bdz.css';
import '../../css/v/vx7ekl86x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q67lela2z"/><path class="etm45wn7e"/><path class="iln4v0bdz"/><path class="vx7ekl86x"/></g>`,
		"fallback": "fluent-emoji-flat:church",
	});
}

export default Component;
