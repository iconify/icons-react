import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jevk7xbeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jevk7xbeu"/>`,
		"fallback": "bi:exclamation-triangle-fill",
	});
}

export default Component;
