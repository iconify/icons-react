import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ct_l43brl.css';
import '../../css/k/kf2765lth.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ct_l43brl"/><path class="kf2765lth"/></g>`,
		"fallback": "glyphs:brain-duo",
	});
}

export default Component;
