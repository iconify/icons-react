import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9dlazb0p.css';
import '../../css/l/lu5-4oist.css';
import '../../css/r/reyjvibzg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9dlazb0p"/><path class="lu5-4oist"/><path class="reyjvibzg"/></g>`,
		"fallback": "glyphs:briefcase-medical-duo",
	});
}

export default Component;
