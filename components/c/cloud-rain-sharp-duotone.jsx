import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/agq-vibiy.css';
import '../../css/f/f08o8qcgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="agq-vibiy"/><path class="f08o8qcgp"/></g>`,
		"fallback": "keyline-icons:cloud-rain-sharp-duotone",
	});
}

export default Component;
