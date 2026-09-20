import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccbtvzb6r.css';
import '../../css/c/ci0uidb4r.css';
import '../../css/q/q3wljubyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ccbtvzb6r"/><path class="ci0uidb4r"/><path class="q3wljubyk"/></g>`,
		"fallback": "pixelarticons:grid-2x2-2",
	});
}

export default Component;
