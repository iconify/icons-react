import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2yzidb4z.css';
import '../../css/b/b79k59b-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2yzidb4z"/><path class="b79k59b-v"/></g>`,
		"fallback": "fluent-emoji-flat:chains",
	});
}

export default Component;
