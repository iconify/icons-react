import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djude9bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djude9bqi"/>`,
		"fallback": "mdi:flag-checkered-variant",
	});
}

export default Component;
