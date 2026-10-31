import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcttuj7qy.css';
import '../../css/u/ufgmbrbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcttuj7qy"/><path class="ufgmbrbyc"/></g>`,
		"fallback": "coolicons:copy-plus-duotone-round",
	});
}

export default Component;
