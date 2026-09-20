import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr6emiboa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr6emiboa"/>`,
		"fallback": "roentgen:apartments-4-story-skillion-roof",
	});
}

export default Component;
