import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5t6t7bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5t6t7bhd"/>`,
		"fallback": "mdi:flower-tulip",
	});
}

export default Component;
