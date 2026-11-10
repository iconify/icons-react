import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czw5mnb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czw5mnb3e"/>`,
		"fallback": "sidekickicons:bookmark-check",
	});
}

export default Component;
