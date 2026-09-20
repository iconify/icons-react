import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cshvsweet.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mfug5ibpq.css';
import '../../css/c/c66ezsb2m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cshvsweet"/><g class="ij2x_72vy"><path class="mfug5ibpq"/><path class="c66ezsb2m"/></g>`,
		"fallback": "openmoji:code-editor",
	});
}

export default Component;
