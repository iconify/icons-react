import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swlc4cbxg.css';
import '../../css/j/j7wh26bby.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swlc4cbxg"/><path class="j7wh26bby"/></g>`,
		"fallback": "fluent-emoji-flat:call-me-hand-medium",
	});
}

export default Component;
