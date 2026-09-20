import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm8b7jchf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm8b7jchf"/>`,
		"fallback": "mdi:clipboard-play-outline",
	});
}

export default Component;
