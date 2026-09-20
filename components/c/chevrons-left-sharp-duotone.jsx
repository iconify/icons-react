import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e1ktlybjb.css';
import '../../css/q/q-wnakbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e1ktlybjb"/><path class="q-wnakbbs"/></g>`,
		"fallback": "keyline-icons:chevrons-left-sharp-duotone",
	});
}

export default Component;
