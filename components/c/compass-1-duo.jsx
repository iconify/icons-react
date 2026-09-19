import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7qxbnbvo.css';
import '../../css/d/dol-jyfgm.css';
import '../../css/k/k3cj--b3l.css';
import '../../css/g/g0_mboyku.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z7qxbnbvo"/><path class="dol-jyfgm"/><path class="k3cj--b3l"/><path class="g0_mboyku"/></g>`,
		"fallback": "glyphs:compass-1-duo",
	});
}

export default Component;
