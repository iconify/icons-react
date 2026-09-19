import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns7q5-h7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns7q5-h7c"/>`,
		"fallback": "carbon:curved-line-dashed",
	});
}

export default Component;
