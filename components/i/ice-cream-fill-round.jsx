import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_w7_5kaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_w7_5kaa"/>`,
		"fallback": "coolicons:ice-cream-fill-round",
	});
}

export default Component;
