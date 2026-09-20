import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_6cckbpv.css';
import '../../css/p/p40farr9n.css';
import '../../css/y/y7j67acbt.css';
import '../../css/o/ouualkb4q.css';
import '../../css/o/oip2zwboy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/c/c2jy4nrsr.css';
import '../../css/a/aq67arb9j.css';
import '../../css/f/f4yciseyj.css';
import '../../css/a/a6m01gvhu.css';
import '../../css/n/noxy1bb3g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k_6cckbpv"/><circle class="p40farr9n"/><circle class="y7j67acbt"/><circle class="ouualkb4q"/><circle class="oip2zwboy"/><g class="ij2x_72vy"><path class="c2jy4nrsr"/><path class="aq67arb9j"/><path class="f4yciseyj"/><path class="a6m01gvhu"/><path class="noxy1bb3g"/></g>`,
		"fallback": "openmoji:direct-hit",
	});
}

export default Component;
