import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3une8b-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3une8b-g"/>`,
		"fallback": "garden:face-very-sad-stroke-16",
	});
}

export default Component;
