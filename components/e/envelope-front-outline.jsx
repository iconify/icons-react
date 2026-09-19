import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lyq5oz7xh.css';
import '../../css/a/aa91s4kim.css';
import '../../css/e/e9041zbna.css';
import '../../css/g/g66c9lb7c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lyq5oz7xh"/><path clip-rule="evenodd" class="aa91s4kim"/><path class="e9041zbna"/><path clip-rule="evenodd" class="g66c9lb7c"/></g>`,
		"fallback": "glyphs:envelope-front-outline",
	});
}

export default Component;
