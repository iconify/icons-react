import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnz9l5-su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnz9l5-su"/>`,
		"fallback": "mingcute:align-start-horizontal-fill",
	});
}

export default Component;
