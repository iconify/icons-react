import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blnz3vcsu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blnz3vcsu"/>`,
		"fallback": "energy-icons:energy-cooperative-20-bold",
	});
}

export default Component;
