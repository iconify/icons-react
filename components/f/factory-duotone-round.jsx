import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb7p2cb-p.css';
import '../../css/s/sha6h0b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sb7p2cb-p"/><path class="sha6h0b4p"/></g>`,
		"fallback": "coolicons:factory-duotone-round",
	});
}

export default Component;
