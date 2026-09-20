import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-2cvxbug.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-2cvxbug"/>`,
		"fallback": "rivet-icons:audio-off",
	});
}

export default Component;
