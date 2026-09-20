import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd46z9b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd46z9b5n"/>`,
		"fallback": "mdi:diploma",
	});
}

export default Component;
