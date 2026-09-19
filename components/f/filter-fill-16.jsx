import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o815owbyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o815owbyl"/>`,
		"fallback": "garden:filter-fill-16",
	});
}

export default Component;
