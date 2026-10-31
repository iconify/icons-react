import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kjq30hvft.css';
import '../../css/m/mri53686k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kjq30hvft"/><path class="mri53686k"/></g>`,
		"fallback": "withicons-retro:arrow-down-left",
	});
}

export default Component;
