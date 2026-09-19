import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3_djrgrp.css';
import '../../css/j/j6lpvdbmc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3_djrgrp"/><path class="j6lpvdbmc"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-at-the-viewer-medium-dark",
	});
}

export default Component;
