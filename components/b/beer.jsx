import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/orvuzw1eu.css';
import '../../css/p/pfm0_8fry.css';
import '../../css/c/c8q0b5a8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="orvuzw1eu"/><path class="pfm0_8fry"/><path class="c8q0b5a8h"/></g>`,
		"fallback": "tdesign:beer",
	});
}

export default Component;
