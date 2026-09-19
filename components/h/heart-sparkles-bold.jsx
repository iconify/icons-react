import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhb779nue.css';
import '../../css/g/g9wzcsquv.css';
import '../../css/b/bcsqw5n-n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uhb779nue"/><path clip-rule="evenodd" class="g9wzcsquv"/><path class="bcsqw5n-n"/></g>`,
		"fallback": "glyphs:heart-sparkles-bold",
	});
}

export default Component;
