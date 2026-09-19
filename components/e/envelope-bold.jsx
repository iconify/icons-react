import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qx4t8nbiu.css';
import '../../css/n/n4p22bcgb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qx4t8nbiu"/><path class="n4p22bcgb"/></g>`,
		"fallback": "glyphs:envelope-bold",
	});
}

export default Component;
