import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqepzpy9j.css';
import '../../css/h/hyg-y8b4z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oqepzpy9j"/><path class="hyg-y8b4z"/></g>`,
		"fallback": "fluent-emoji-flat:cheese-wedge",
	});
}

export default Component;
