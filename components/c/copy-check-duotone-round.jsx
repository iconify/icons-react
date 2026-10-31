import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcttuj7qy.css';
import '../../css/m/mn5rhwbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcttuj7qy"/><path class="mn5rhwbrr"/></g>`,
		"fallback": "coolicons:copy-check-duotone-round",
	});
}

export default Component;
