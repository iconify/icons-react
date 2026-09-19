import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3yeq3__n.css';
import '../../css/q/qbtyf7buh.css';
import '../../css/j/j7hpihb9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3yeq3__n"/><path class="qbtyf7buh"/><path class="j7hpihb9i"/>`,
		"fallback": "carbon:drone-delivery",
	});
}

export default Component;
