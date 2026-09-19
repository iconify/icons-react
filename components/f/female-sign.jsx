import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds86r9bav.css';
import '../../css/k/km6e-1bbd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ds86r9bav"/><path class="km6e-1bbd"/></g>`,
		"fallback": "fluent-emoji-flat:female-sign",
	});
}

export default Component;
