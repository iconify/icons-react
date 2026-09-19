import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s_-y-xbkp.css';
import '../../css/k/kua4ew-2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s_-y-xbkp"/><path class="kua4ew-2s"/></g>`,
		"fallback": "hugeicons:closed-caption",
	});
}

export default Component;
