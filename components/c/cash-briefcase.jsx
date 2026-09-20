import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/apnsnraet.css';
import '../../css/i/i0l8nlq8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="apnsnraet"/><path class="i0l8nlq8k"/></g>`,
		"fallback": "streamline-ultimate:cash-briefcase",
	});
}

export default Component;
