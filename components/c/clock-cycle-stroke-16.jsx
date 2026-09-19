import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vioo8qbuc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vioo8qbuc"/>`,
		"fallback": "garden:clock-cycle-stroke-16",
	});
}

export default Component;
