import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvb49db5b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvb49db5b"/>`,
		"fallback": "roentgen:apartments-1-story-gabled-roof",
	});
}

export default Component;
