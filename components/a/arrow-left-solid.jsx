import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8afr61ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8afr61ua"/>`,
		"fallback": "stash:arrow-left-solid",
	});
}

export default Component;
