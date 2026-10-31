import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8d5g65qk.css';
import '../../css/a/ar-ejfdfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8d5g65qk"/><path class="ar-ejfdfk"/></g>`,
		"fallback": "coolicons:hand-duotone-round",
	});
}

export default Component;
