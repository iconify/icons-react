import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i477xac4d.css';
import '../../css/u/umyorzjad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i477xac4d"/><path class="umyorzjad"/></g>`,
		"fallback": "keyline-icons:cpu-sharp-duotone",
	});
}

export default Component;
