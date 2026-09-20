import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy9xt0pmf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy9xt0pmf"/>`,
		"fallback": "nimbus:flag",
	});
}

export default Component;
