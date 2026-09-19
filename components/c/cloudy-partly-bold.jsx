import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajakmtb0v.css';
import '../../css/x/xp5l59bfe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ajakmtb0v"/><path class="xp5l59bfe"/></g>`,
		"fallback": "glyphs:cloudy-partly-bold",
	});
}

export default Component;
