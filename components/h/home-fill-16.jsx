import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-pu6wzxd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-pu6wzxd"/>`,
		"fallback": "octicon:home-fill-16",
	});
}

export default Component;
