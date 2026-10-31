import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llsgl5bka.css';
import '../../css/i/i837xzbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="llsgl5bka"/><path class="i837xzbhc"/></g>`,
		"fallback": "coolicons:folder-sparkle-corner-duotone-round",
	});
}

export default Component;
