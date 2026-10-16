import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni7oe8l5n.css';
import '../../css/c/c7c-kxbrc.css';
import '../../css/r/rqodbzvhy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni7oe8l5n"/><path class="c7c-kxbrc"/><path class="rqodbzvhy"/>`,
		"fallback": "energy-icons:currency-exchange-20-bold",
	});
}

export default Component;
