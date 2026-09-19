import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp1h99b8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp1h99b8c"/>`,
		"fallback": "carbon:direction-bear-right-01",
	});
}

export default Component;
