import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/g/gqfpyx1oz.css';
import '../../css/f/f19jdeuju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="q0egn3lpb"/><path class="gqfpyx1oz"/><path class="f19jdeuju"/></g>`,
		"fallback": "si-glyph:database",
	});
}

export default Component;
