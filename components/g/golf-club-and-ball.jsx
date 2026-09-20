import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le12s8byy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le12s8byy"/>`,
		"fallback": "roentgen:golf-club-and-ball",
	});
}

export default Component;
