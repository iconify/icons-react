import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbjb7xbdp.css';
import '../../css/j/jbv-v0b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pbjb7xbdp"/><path class="jbv-v0b3u"/></g>`,
		"fallback": "coolicons:fridge-duotone-round",
	});
}

export default Component;
