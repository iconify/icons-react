import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/plwbux8wl.css';
import '../../css/j/jd3_-d4_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="plwbux8wl"/><path class="jd3_-d4_j"/></g>`,
		"fallback": "keyline-icons:droplet-off",
	});
}

export default Component;
