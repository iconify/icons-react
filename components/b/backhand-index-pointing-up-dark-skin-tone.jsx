import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi96e8hsg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/ga2e5_pov.css';
import '../../css/v/vbn8aybcc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi96e8hsg"/><g class="ij2x_72vy"><path class="ga2e5_pov"/><path class="vbn8aybcc"/></g>`,
		"fallback": "openmoji:backhand-index-pointing-up-dark-skin-tone",
	});
}

export default Component;
