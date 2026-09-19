import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ganijib7d.css';
import '../../css/n/nccjn1-dm.css';
import '../../css/i/ioeyefb3u.css';
import '../../css/h/hx-580b1y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><g transform="translate(3 3)"><path class="ganijib7d"/><ellipse class="nccjn1-dm"/><path class="ioeyefb3u"/></g><path class="hx-580b1y"/></g>`,
		"fallback": "si-glyph:disc",
	});
}

export default Component;
