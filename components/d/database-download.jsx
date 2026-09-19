import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/f/f19jdeuju.css';
import '../../css/q/q_0b0cc6z.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><g transform="translate(2)"><ellipse class="q0egn3lpb"/><path class="f19jdeuju"/></g><path class="q_0b0cc6z"/></g>`,
		"fallback": "si-glyph:database-download",
	});
}

export default Component;
