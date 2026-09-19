import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfc7m9b0d.css';
import '../../css/v/v2-la-b1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mfc7m9b0d"/><path class="v2-la-b1b"/></g>`,
		"fallback": "fluent-emoji-flat:collision",
	});
}

export default Component;
