import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26-3rjjw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g26-3rjjw"/>`,
		"fallback": "la:coffee-solid",
	});
}

export default Component;
