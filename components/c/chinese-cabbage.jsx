import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsmjvib5p.css';
import '../../css/o/o7n3n0zde.css';
import '../../css/e/e43x9kbpz.css';
import '../../css/f/fibzt4t-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsmjvib5p"/><path class="o7n3n0zde"/><path class="e43x9kbpz"/><path class="fibzt4t-b"/></g>`,
		"fallback": "tdesign:chinese-cabbage",
	});
}

export default Component;
