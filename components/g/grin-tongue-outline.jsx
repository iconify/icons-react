import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbq6t4bru.css';
import '../../css/s/sg8-s5bcj.css';
import '../../css/x/x-sjrbcab.css';
import '../../css/w/wg-9_kb5r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nbq6t4bru"/><path clip-rule="evenodd" class="sg8-s5bcj"/><path class="x-sjrbcab"/><path clip-rule="evenodd" class="wg-9_kb5r"/></g>`,
		"fallback": "glyphs:grin-tongue-outline",
	});
}

export default Component;
