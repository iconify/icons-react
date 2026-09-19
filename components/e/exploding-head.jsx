import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jn7i9jbvg.css';
import '../../css/w/wf8ebywlw.css';
import '../../css/u/u45aizbtd.css';
import '../../css/u/u3smvcc8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jn7i9jbvg"/><path class="wf8ebywlw"/><path class="u45aizbtd"/><path class="u3smvcc8q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:exploding-head",
	});
}

export default Component;
