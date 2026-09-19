import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ez6-i2btq.css';
import '../../css/t/tcgn7ac3p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ez6-i2btq"/><path class="tcgn7ac3p"/></g>`,
		"fallback": "glyphs:bed-bunk-outline",
	});
}

export default Component;
