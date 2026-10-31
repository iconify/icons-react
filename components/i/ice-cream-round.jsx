import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kia26mbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kia26mbgm"/>`,
		"fallback": "coolicons:ice-cream-round",
	});
}

export default Component;
