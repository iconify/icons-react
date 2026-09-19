import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/g/g2n1prb3y.css';
import '../../css/g/gecs6xp5p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2)" class="n1lsf0bnc"><ellipse class="q0egn3lpb"/><path class="g2n1prb3y"/><path class="gecs6xp5p"/></g>`,
		"fallback": "si-glyph:database-error",
	});
}

export default Component;
