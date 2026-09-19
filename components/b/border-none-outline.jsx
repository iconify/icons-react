import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g26clgb3g.css';
import '../../css/l/l5x54k64v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g26clgb3g"/><path class="l5x54k64v"/></g>`,
		"fallback": "glyphs:border-none-outline",
	});
}

export default Component;
