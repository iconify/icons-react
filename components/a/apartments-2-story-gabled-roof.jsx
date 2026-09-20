import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3qpvprfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3qpvprfs"/>`,
		"fallback": "roentgen:apartments-2-story-gabled-roof",
	});
}

export default Component;
