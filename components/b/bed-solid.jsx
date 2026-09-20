import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1w31db5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1w31db5c"/>`,
		"fallback": "la:bed-solid",
	});
}

export default Component;
