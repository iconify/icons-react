import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d35pi9b1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d35pi9b1e"/>`,
		"fallback": "cryptocurrency:cloak",
	});
}

export default Component;
