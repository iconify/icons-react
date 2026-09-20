import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7yh57b8f.css';
import '../../css/v/vy7z0rbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7yh57b8f"/><path class="vy7z0rbrj"/></g>`,
		"fallback": "pixelarticons:blocks",
	});
}

export default Component;
