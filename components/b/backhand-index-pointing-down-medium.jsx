import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1iyy0bes.css';
import '../../css/b/bs166rb4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1iyy0bes"/><path clip-rule="evenodd" class="bs166rb4p"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-down-medium",
	});
}

export default Component;
