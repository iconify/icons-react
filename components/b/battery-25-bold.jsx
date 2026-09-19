import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g85xu4buw.css';
import '../../css/x/xa-p4wb5u.css';
import '../../css/l/lyvx4mbnc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g85xu4buw"/><path clip-rule="evenodd" class="xa-p4wb5u"/><path class="lyvx4mbnc"/></g>`,
		"fallback": "glyphs:battery-25-bold",
	});
}

export default Component;
