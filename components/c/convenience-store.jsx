import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flt8eko3g.css';
import '../../css/j/j1fiyyqgy.css';
import '../../css/o/ookjikx2v.css';
import '../../css/n/n20_omb2u.css';
import '../../css/v/vvj_g8bhu.css';
import '../../css/k/kp_4pxbqw.css';
import '../../css/d/dfzzo-l8y.css';
import '../../css/c/cnrn-2ifo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flt8eko3g"/><path class="j1fiyyqgy"/><ellipse class="ookjikx2v"/><g class="n20_omb2u"><path class="vvj_g8bhu"/><path class="kp_4pxbqw"/><ellipse class="dfzzo-l8y"/><path class="cnrn-2ifo"/></g>`,
		"fallback": "openmoji:convenience-store",
	});
}

export default Component;
