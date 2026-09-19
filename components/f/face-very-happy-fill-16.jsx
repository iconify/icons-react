import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxvd1fose.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxvd1fose"/>`,
		"fallback": "garden:face-very-happy-fill-16",
	});
}

export default Component;
