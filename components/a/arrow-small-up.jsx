import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy4q2qsdr.css';

const viewBox = {"width":6,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy4q2qsdr"/>`,
		"fallback": "octicon:arrow-small-up",
	});
}

export default Component;
