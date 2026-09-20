import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wntc1qbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wntc1qbek"/>`,
		"fallback": "meteor-icons:chess-bishop",
	});
}

export default Component;
