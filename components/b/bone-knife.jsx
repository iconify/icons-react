import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syige5y7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syige5y7k"/>`,
		"fallback": "game-icons:bone-knife",
	});
}

export default Component;
