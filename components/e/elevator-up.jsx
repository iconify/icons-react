import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q2ic2ib6r.css';
import '../../css/a/a7hbc4b1f.css';
import '../../css/i/infedybtq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q2ic2ib6r"/><g transform="translate(5 1)"><ellipse class="a7hbc4b1f"/><path class="infedybtq"/></g></g>`,
		"fallback": "si-glyph:elevator-up",
	});
}

export default Component;
