import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5w92nb7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5w92nb7k"/>`,
		"fallback": "pinhead:field-hockey-stick",
	});
}

export default Component;
