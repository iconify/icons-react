import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmpm6kbfe.css';
import '../../css/y/y8fztob6t.css';
import '../../css/k/kuz_tibiz.css';
import '../../css/l/lqysr5b7l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jmpm6kbfe"/><path class="y8fztob6t"/><path class="kuz_tibiz"/><path class="lqysr5b7l"/></g>`,
		"fallback": "glyphs:fire-smoke-duo",
	});
}

export default Component;
