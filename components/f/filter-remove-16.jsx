import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn4sofbrf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn4sofbrf"/>`,
		"fallback": "octicon:filter-remove-16",
	});
}

export default Component;
