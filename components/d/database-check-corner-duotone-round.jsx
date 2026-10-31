import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tm3r-ebrm.css';
import '../../css/y/ydd7rz8th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tm3r-ebrm"/><path class="ydd7rz8th"/></g>`,
		"fallback": "coolicons:database-check-corner-duotone-round",
	});
}

export default Component;
