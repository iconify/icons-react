import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkp8a0bcv.css';
import '../../css/y/y000a8cns.css';
import '../../css/o/os0hnf_5x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkp8a0bcv"/><path class="y000a8cns"/><path class="os0hnf_5x"/></g>`,
		"fallback": "glyphs-poly:arrow-line-start",
	});
}

export default Component;
