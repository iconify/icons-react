import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9g8h-bie.css';
import '../../css/z/zn_p66lkq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h9g8h-bie"/><path class="zn_p66lkq"/></g>`,
		"fallback": "glyphs-poly:bolt",
	});
}

export default Component;
