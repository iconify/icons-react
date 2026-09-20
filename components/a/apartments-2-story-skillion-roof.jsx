import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2qeb8bam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2qeb8bam"/>`,
		"fallback": "roentgen:apartments-2-story-skillion-roof",
	});
}

export default Component;
