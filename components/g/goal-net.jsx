import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8oyzdfvh.css';
import '../../css/d/d8fs9jbmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8oyzdfvh"/><path class="d8fs9jbmd"/></g>`,
		"fallback": "fluent-emoji-flat:goal-net",
	});
}

export default Component;
