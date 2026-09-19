import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilpzcmn9h.css';
import '../../css/r/r-1mee2wh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ilpzcmn9h"/><path class="r-1mee2wh"/></g>`,
		"fallback": "glyphs:books-duo",
	});
}

export default Component;
