import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccv0f09co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccv0f09co"/>`,
		"fallback": "ri:fediverse-line",
	});
}

export default Component;
