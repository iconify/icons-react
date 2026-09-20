import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/prlfu8ppt.css';
import '../../css/r/recy5eaam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="prlfu8ppt"/><path class="recy5eaam"/></g>`,
		"fallback": "keyline-icons:arrow-big-up-sharp-two-tone",
	});
}

export default Component;
