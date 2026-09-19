import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k27k1godu.css';
import '../../css/h/hvp7y8b9e.css';
import '../../css/q/q0eq7jb_s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k27k1godu"/><path class="hvp7y8b9e"/><path class="q0eq7jb_s"/></g>`,
		"fallback": "glyphs:arrow-external-outline",
	});
}

export default Component;
