import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awq076brg.css';
import '../../css/i/iu1267byo.css';
import '../../css/v/v37o3sb4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="awq076brg"/><path class="iu1267byo"/><path class="v37o3sb4e"/></g>`,
		"fallback": "fluent-emoji-flat:first-quarter-moon-face",
	});
}

export default Component;
