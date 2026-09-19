import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzjs-rb7b.css';
import '../../css/l/lc5gbrbdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uzjs-rb7b"/><path class="lc5gbrbdy"/></g>`,
		"fallback": "fluent-emoji-flat:ear-medium",
	});
}

export default Component;
