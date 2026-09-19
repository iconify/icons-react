import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s55lt5h3d.css';
import '../../css/h/hj5rgkb7i.css';
import '../../css/f/f86ikg2dl.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 5)" class="n1lsf0bnc"><path class="s55lt5h3d"/><ellipse class="hj5rgkb7i"/><path class="f86ikg2dl"/></g>`,
		"fallback": "si-glyph:bed",
	});
}

export default Component;
