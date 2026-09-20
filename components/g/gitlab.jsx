import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1h51eboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1h51eboy"/>`,
		"fallback": "mdi:gitlab",
	});
}

export default Component;
