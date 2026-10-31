import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-coozbch.css';
import '../../css/v/v2pjf6bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-coozbch"/><path class="v2pjf6bzm"/></g>`,
		"fallback": "coolicons:eraser-sparkle-duotone-round",
	});
}

export default Component;
