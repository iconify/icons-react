import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1-37of7y.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1-37of7y"/>`,
		"fallback": "fa6-solid:caravan",
	});
}

export default Component;
