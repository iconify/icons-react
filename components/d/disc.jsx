import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8c55jjuz.css';
import '../../css/b/bx91jnigp.css';
import '../../css/m/m75sr8b7y.css';
import '../../css/v/v5wqwnbzp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8c55jjuz"/><path class="bx91jnigp"/><path class="m75sr8b7y"/><path class="v5wqwnbzp"/></g>`,
		"fallback": "glyphs-poly:disc",
	});
}

export default Component;
