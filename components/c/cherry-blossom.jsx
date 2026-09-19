import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t80qkviep.css';
import '../../css/a/a0s9bwbel.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t80qkviep"/><path class="a0s9bwbel"/></g>`,
		"fallback": "fluent-emoji-flat:cherry-blossom",
	});
}

export default Component;
