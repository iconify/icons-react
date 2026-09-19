import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t446ypbya.css';
import '../../css/r/rso6jlb3w.css';
import '../../css/f/fslmcjxus.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t446ypbya"/><path class="rso6jlb3w"/><path class="fslmcjxus"/></g>`,
		"fallback": "glyphs:exclude-duo",
	});
}

export default Component;
