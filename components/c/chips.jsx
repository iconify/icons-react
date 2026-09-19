import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp21e2hbh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp21e2hbh"/>`,
		"fallback": "cryptocurrency:chips",
	});
}

export default Component;
