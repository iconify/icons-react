import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3ho87bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3ho87bet"/>`,
		"fallback": "coolicons:heart-off-round",
	});
}

export default Component;
