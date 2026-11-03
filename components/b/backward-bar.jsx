import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc-v1dj8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc-v1dj8p"/>`,
		"fallback": "sidekickicons:backward-bar",
	});
}

export default Component;
