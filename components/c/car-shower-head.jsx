import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7jaokete.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7jaokete"/>`,
		"fallback": "roentgen:car-shower-head",
	});
}

export default Component;
