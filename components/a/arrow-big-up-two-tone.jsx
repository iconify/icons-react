import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf2_m1i_z.css';
import '../../css/h/hiyb4ab5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bf2_m1i_z"/><path class="hiyb4ab5p"/></g>`,
		"fallback": "keyline-icons:arrow-big-up-two-tone",
	});
}

export default Component;
