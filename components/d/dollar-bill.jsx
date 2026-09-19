import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tubjcdsun.css';
import '../../css/w/wvqiseurq.css';
import '../../css/u/uotc2xkxx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tubjcdsun"/><path clip-rule="evenodd" class="wvqiseurq"/><path class="uotc2xkxx"/></g>`,
		"fallback": "glyphs-poly:dollar-bill",
	});
}

export default Component;
