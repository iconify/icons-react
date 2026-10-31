import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipyreya2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ipyreya2v"/>`,
		"fallback": "sidekickicons:arrow-path-single-clockwise-solid",
	});
}

export default Component;
