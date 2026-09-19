import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6lprsbiy.css';
import '../../css/s/snqitqbqr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6lprsbiy"/><path class="snqitqbqr"/>`,
		"fallback": "carbon:agent-detached",
	});
}

export default Component;
