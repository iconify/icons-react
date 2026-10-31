import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a6qvjjb4f.css';
import '../../css/e/elqirpz5r.css';
import '../../css/q/qo6r8rb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a6qvjjb4f wm-k"/><path class="elqirpz5r wm-a"/><path class="qo6r8rb6h wm-deco"/></g>`,
		"fallback": "withicons-kawaii:arrow-down-left",
	});
}

export default Component;
