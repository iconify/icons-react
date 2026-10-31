import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e43r7kbsl.css';
import '../../css/a/aif1ydb6t.css';
import '../../css/d/d7ih96bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e43r7kbsl wm-k"/><path class="aif1ydb6t wm-shine"/><path class="d7ih96bcr wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-fox",
	});
}

export default Component;
