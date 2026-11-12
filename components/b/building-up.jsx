import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbnco8jkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbnco8jkr"/>`,
		"fallback": "tabler:building-up",
	});
}

export default Component;
