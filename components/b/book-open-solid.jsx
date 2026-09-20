import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssmc3qbrv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssmc3qbrv"/>`,
		"fallback": "la:book-open-solid",
	});
}

export default Component;
