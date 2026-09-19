import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2pr8hokp.css';
import '../../css/j/jswp7mbzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2pr8hokp"/><path class="jswp7mbzj"/>`,
		"fallback": "fxemoji:fallingleaf",
	});
}

export default Component;
