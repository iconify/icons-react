import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj5j7fs1y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj5j7fs1y"/>`,
		"fallback": "cib:instagram",
	});
}

export default Component;
