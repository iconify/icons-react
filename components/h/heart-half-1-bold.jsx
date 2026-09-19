import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hhw25b6ip.css';
import '../../css/e/euhg6bb2m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hhw25b6ip"/><path clip-rule="evenodd" class="euhg6bb2m"/></g>`,
		"fallback": "glyphs:heart-half-1-bold",
	});
}

export default Component;
