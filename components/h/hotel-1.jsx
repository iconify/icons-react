import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv3ck326i.css';
import '../../css/n/n585bbrpz.css';
import '../../css/n/ned9hhbmj.css';
import '../../css/t/tu9faqbes.css';
import '../../css/y/ycgtg3bex.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yv3ck326i"/><path class="n585bbrpz"/><path class="ned9hhbmj"/><path clip-rule="evenodd" class="tu9faqbes"/><path class="ycgtg3bex"/></g>`,
		"fallback": "glyphs-poly:hotel-1",
	});
}

export default Component;
