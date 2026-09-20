import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zilnhst.css';
import '../../css/e/e92nyba0h.css';
import '../../css/w/w8p6qwx-n.css';
import '../../css/r/rpt60czch.css';
import '../../css/v/vf521x8fj.css';

const viewBox = {"width":45,"height":41};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k2zilnhst"/><path class="e92nyba0h"/><path class="w8p6qwx-n"/><path class="rpt60czch"/><path class="vf521x8fj"/></g>`,
		"fallback": "thesvg-color:bento",
	});
}

export default Component;
