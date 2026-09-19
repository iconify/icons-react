import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7zy9r0hm.css';
import '../../css/j/j98dcnb4b.css';
import '../../css/r/r0g01zbje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7zy9r0hm"/><path class="j98dcnb4b"/><path class="r0g01zbje"/></g>`,
		"fallback": "fluent-emoji-flat:bookmark",
	});
}

export default Component;
