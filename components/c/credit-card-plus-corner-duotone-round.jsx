import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk9vkxkrw.css';
import '../../css/p/p8herfcil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pk9vkxkrw"/><path class="p8herfcil"/></g>`,
		"fallback": "coolicons:credit-card-plus-corner-duotone-round",
	});
}

export default Component;
