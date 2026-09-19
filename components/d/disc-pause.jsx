import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/age6e0b3t.css';
import '../../css/n/nccjn1-dm.css';
import '../../css/i/ioeyefb3u.css';
import '../../css/l/liwnglp2l.css';
import '../../css/c/cr2woabks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><g transform="translate(3 3)"><path class="age6e0b3t"/><ellipse class="nccjn1-dm"/><path class="ioeyefb3u"/></g><path class="liwnglp2l"/><path class="cr2woabks"/></g>`,
		"fallback": "si-glyph:disc-pause",
	});
}

export default Component;
