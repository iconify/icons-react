import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kom6uqbjs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kom6uqbjs"/>`,
		"fallback": "fa6-solid:arrow-up-right-from-square",
	});
}

export default Component;
