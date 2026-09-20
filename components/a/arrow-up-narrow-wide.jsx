import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2-uj3bfb.css';
import '../../css/f/fftcvjb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2-uj3bfb"/><path class="fftcvjb9h"/></g>`,
		"fallback": "pixelarticons:arrow-up-narrow-wide",
	});
}

export default Component;
