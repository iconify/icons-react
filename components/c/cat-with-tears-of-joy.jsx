import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecqb_dbzv.css';
import '../../css/m/m8jfc6btk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ecqb_dbzv"/><path class="m8jfc6btk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cat-with-tears-of-joy",
	});
}

export default Component;
