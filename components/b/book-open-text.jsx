import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f6nre5nml.css';
import '../../css/d/d4k-d8bhf.css';
import '../../css/q/q48owdupn.css';
import '../../css/e/e7ene7bgk.css';
import '../../css/c/cn9k0bcsa.css';
import '../../css/i/ib1zyd5jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f6nre5nml wm-shadow"/><path class="d4k-d8bhf"/><path class="q48owdupn"/><path class="e7ene7bgk"/><path class="cn9k0bcsa"/><path class="ib1zyd5jm"/></g>`,
		"fallback": "withicons-retro:book-open-text",
	});
}

export default Component;
