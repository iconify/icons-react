import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6vtivb0o.css';
import '../../css/r/r3rhvblqo.css';
import '../../css/h/h4t01ccjd.css';
import '../../css/z/zkfs82-3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6vtivb0o"/><path class="r3rhvblqo"/><path class="h4t01ccjd"/><path class="zkfs82-3t"/></g>`,
		"fallback": "fluent-emoji-flat:bat",
	});
}

export default Component;
