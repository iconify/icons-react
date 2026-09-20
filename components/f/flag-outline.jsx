import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk9p7gn2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk9p7gn2b"/>`,
		"fallback": "lsicon:flag-outline",
	});
}

export default Component;
