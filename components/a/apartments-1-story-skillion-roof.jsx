import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcnmdn8pi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcnmdn8pi"/>`,
		"fallback": "roentgen:apartments-1-story-skillion-roof",
	});
}

export default Component;
