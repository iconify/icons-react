import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trp_y9bit.css';
import '../../css/w/w2-20ab2x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="trp_y9bit"/><path class="w2-20ab2x"/></g>`,
		"fallback": "glyphs:book-open-duo",
	});
}

export default Component;
