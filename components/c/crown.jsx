import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1-9e5ove.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1-9e5ove"/>`,
		"fallback": "la:crown",
	});
}

export default Component;
