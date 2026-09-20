import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0cqydxux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0cqydxux"/>`,
		"fallback": "mdi:home-sound-out-outline",
	});
}

export default Component;
