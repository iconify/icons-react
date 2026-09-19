import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yprv9ybsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yprv9ybsu"/>`,
		"fallback": "carbon:cabin-care-alt",
	});
}

export default Component;
