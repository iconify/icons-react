import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onwa8sb2c.css';
import '../../css/k/kjwymwxwh.css';
import '../../css/i/iur_obb4v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="onwa8sb2c"/><path class="kjwymwxwh"/><path class="iur_obb4v"/></g>`,
		"fallback": "glyphs:dollar-bills-duo",
	});
}

export default Component;
