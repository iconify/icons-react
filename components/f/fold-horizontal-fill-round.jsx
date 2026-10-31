import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts83b_9vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts83b_9vy"/>`,
		"fallback": "coolicons:fold-horizontal-fill-round",
	});
}

export default Component;
