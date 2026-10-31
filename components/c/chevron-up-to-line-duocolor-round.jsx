import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srugpnb9t.css';
import '../../css/v/v2vk_nezw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="srugpnb9t"/><path class="v2vk_nezw"/></g>`,
		"fallback": "coolicons:chevron-up-to-line-duocolor-round",
	});
}

export default Component;
