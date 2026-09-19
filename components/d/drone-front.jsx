import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnd39cc7h.css';
import '../../css/j/j7hpihb9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnd39cc7h"/><path class="j7hpihb9i"/>`,
		"fallback": "carbon:drone-front",
	});
}

export default Component;
