import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_z1w_n4f.css';
import '../../css/w/wasqogmzs.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i1bgkow5j.css';
import '../../css/c/cipihpb6g.css';
import '../../css/m/m5ljaxv2d.css';
import '../../css/a/a5wfiacnd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_z1w_n4f"/><path class="wasqogmzs"/><g class="jn8qy4bru"><path class="i1bgkow5j"/><ellipse class="cipihpb6g"/><ellipse class="m5ljaxv2d"/><path class="a5wfiacnd"/></g>`,
		"fallback": "openmoji:bandage-scissors",
	});
}

export default Component;
