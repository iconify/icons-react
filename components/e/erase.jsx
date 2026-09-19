import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0g1hvbsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0g1hvbsu"/>`,
		"fallback": "carbon:erase",
	});
}

export default Component;
