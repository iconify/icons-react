import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsi709svt.css';
import '../../css/s/s9rbofb9x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qsi709svt"/><path class="s9rbofb9x"/></g>`,
		"fallback": "fluent-emoji-flat:black-flag",
	});
}

export default Component;
