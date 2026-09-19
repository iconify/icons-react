import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjvia45sw.css';
import '../../css/t/tm8p9gwlr.css';
import '../../css/p/p8eiskbvq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjvia45sw"/><path class="tm8p9gwlr"/><path class="p8eiskbvq"/></g>`,
		"fallback": "glyphs-poly:gift-1",
	});
}

export default Component;
