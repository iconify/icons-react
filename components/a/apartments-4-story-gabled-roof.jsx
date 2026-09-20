import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq0e26bog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq0e26bog"/>`,
		"fallback": "roentgen:apartments-4-story-gabled-roof",
	});
}

export default Component;
