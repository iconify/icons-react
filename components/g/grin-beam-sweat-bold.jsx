import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vswvwvoty.css';
import '../../css/e/es17tlhsu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vswvwvoty"/><path class="es17tlhsu"/></g>`,
		"fallback": "glyphs:grin-beam-sweat-bold",
	});
}

export default Component;
