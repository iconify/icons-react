import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iakis3b0t.css';
import '../../css/p/putol16pt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iakis3b0t"/><path class="putol16pt"/></g>`,
		"fallback": "fluent-emoji-flat:full-moon",
	});
}

export default Component;
