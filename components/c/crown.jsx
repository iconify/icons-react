import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/esdej9bpk.css';
import '../../css/u/u172-o03c.css';
import '../../css/c/c8os-7gcx.css';
import '../../css/w/wayfa-stq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><path class="esdej9bpk"/><circle class="u172-o03c"/><circle class="c8os-7gcx"/><ellipse class="wayfa-stq"/></g>`,
		"fallback": "si-glyph:crown",
	});
}

export default Component;
