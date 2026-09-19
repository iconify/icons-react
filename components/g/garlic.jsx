import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/be96dqbrr.css';
import '../../css/m/m08iryn4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="be96dqbrr"/><path class="m08iryn4t"/></g>`,
		"fallback": "fluent-emoji-flat:garlic",
	});
}

export default Component;
