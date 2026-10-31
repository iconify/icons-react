import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjr12pbke.css';
import '../../css/x/x9kgnzbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjr12pbke"/><path class="x9kgnzbuh"/></g>`,
		"fallback": "coolicons:armchair-duotone-round",
	});
}

export default Component;
