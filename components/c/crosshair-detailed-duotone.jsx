import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfhc6tbph.css';
import '../../css/q/qrlzx4l6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vfhc6tbph"/><path class="qrlzx4l6k"/></g>`,
		"fallback": "si:crosshair-detailed-duotone",
	});
}

export default Component;
