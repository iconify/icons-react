import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiazg2b_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiazg2b_n"/>`,
		"fallback": "lsicon:copy-two-outline",
	});
}

export default Component;
