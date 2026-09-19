import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh3iwjkha.css';
import '../../css/r/r5hrfmbxe.css';
import '../../css/y/yjks-vsfu.css';
import '../../css/r/r14ix6krv.css';
import '../../css/v/vn8ld76mb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kh3iwjkha"/><path class="r5hrfmbxe"/><path clip-rule="evenodd" class="yjks-vsfu"/><path class="r14ix6krv"/><path class="vn8ld76mb"/></g>`,
		"fallback": "glyphs-poly:eye-1",
	});
}

export default Component;
