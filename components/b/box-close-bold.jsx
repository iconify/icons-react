import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtamu1bmy.css';
import '../../css/j/jpdg6tj0p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gtamu1bmy"/><path class="jpdg6tj0p"/></g>`,
		"fallback": "glyphs:box-close-bold",
	});
}

export default Component;
