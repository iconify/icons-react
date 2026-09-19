import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-_g9tire.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-_g9tire"/>`,
		"fallback": "fa6-solid:arrow-right-from-bracket",
	});
}

export default Component;
