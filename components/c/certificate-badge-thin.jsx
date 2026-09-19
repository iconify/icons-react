import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0a6u5ywy.css';
import '../../css/v/vgtw2kbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e0a6u5ywy"/><path class="vgtw2kbla"/></g>`,
		"fallback": "iconamoon:certificate-badge-thin",
	});
}

export default Component;
