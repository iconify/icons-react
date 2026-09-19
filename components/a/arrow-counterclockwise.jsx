import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvb6lmb_g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvb6lmb_g"/>`,
		"fallback": "at-icons:arrow-counterclockwise",
	});
}

export default Component;
