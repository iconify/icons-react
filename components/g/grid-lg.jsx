import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3xchfa-n.css';
import '../../css/t/tand6n7rv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y3xchfa-n"/><path class="tand6n7rv"/></g>`,
		"fallback": "glyphs-poly:grid-lg",
	});
}

export default Component;
