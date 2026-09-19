import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6fmpgg5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6fmpgg5q"/>`,
		"fallback": "fa6-brands:contao",
	});
}

export default Component;
