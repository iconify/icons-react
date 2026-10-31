import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ymuo3i5hu.css';
import '../../css/k/kpc9-2j-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ymuo3i5hu"/><path class="kpc9-2j-e"/></g>`,
		"fallback": "coolicons:align-right-duotone-round",
	});
}

export default Component;
