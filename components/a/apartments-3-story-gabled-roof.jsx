import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p678uh31n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p678uh31n"/>`,
		"fallback": "roentgen:apartments-3-story-gabled-roof",
	});
}

export default Component;
