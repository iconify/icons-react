import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l10mnouwk.css';
import '../../css/r/rt2zemb8t.css';
import '../../css/d/d8iz-8b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l10mnouwk"/><path class="rt2zemb8t"/><path class="d8iz-8b8j"/></g>`,
		"fallback": "solar:columns-3-bold",
	});
}

export default Component;
