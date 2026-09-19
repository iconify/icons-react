import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny9xkfbzd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny9xkfbzd"/>`,
		"fallback": "fa7-solid:circle-dollar-to-slot",
	});
}

export default Component;
