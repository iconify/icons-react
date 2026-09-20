import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9eh8ivin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9eh8ivin"/>`,
		"fallback": "qlementine-icons:guitar-strat-16",
	});
}

export default Component;
