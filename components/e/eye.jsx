import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzwajx60y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzwajx60y"/>`,
		"fallback": "octicon:eye",
	});
}

export default Component;
