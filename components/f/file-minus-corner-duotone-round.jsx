import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1695c8ou.css';
import '../../css/i/id-c5bcuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1695c8ou"/><path class="id-c5bcuc"/></g>`,
		"fallback": "coolicons:file-minus-corner-duotone-round",
	});
}

export default Component;
