import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfwjwbv8a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfwjwbv8a"/>`,
		"fallback": "codicon:bold",
	});
}

export default Component;
