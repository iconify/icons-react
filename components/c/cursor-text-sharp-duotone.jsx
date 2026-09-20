import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k6yzp7t-z.css';
import '../../css/n/n1941ac-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k6yzp7t-z"/><path class="n1941ac-k"/></g>`,
		"fallback": "keyline-icons:cursor-text-sharp-duotone",
	});
}

export default Component;
