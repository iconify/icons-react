import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg4tzgfjl.css';
import '../../css/l/l9373hz1x.css';
import '../../css/x/x7y684bgr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg4tzgfjl"/><path class="l9373hz1x"/><path class="x7y684bgr"/></g>`,
		"fallback": "fluent-emoji-flat:full-moon-face",
	});
}

export default Component;
