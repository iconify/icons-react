import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly7k85m8u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly7k85m8u"/>`,
		"fallback": "temaki:cooling-tower",
	});
}

export default Component;
