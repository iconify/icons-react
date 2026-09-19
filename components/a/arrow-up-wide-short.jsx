import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7sy1g2se.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7sy1g2se"/>`,
		"fallback": "fa7-solid:arrow-up-wide-short",
	});
}

export default Component;
