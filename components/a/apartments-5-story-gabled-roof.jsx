import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_-_5ac1m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_-_5ac1m"/>`,
		"fallback": "roentgen:apartments-5-story-gabled-roof",
	});
}

export default Component;
