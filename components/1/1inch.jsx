import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9s38sb4o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9s38sb4o"/>`,
		"fallback": "cryptocurrency:1inch",
	});
}

export default Component;
