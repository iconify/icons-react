import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pug4ir7hv.css';
import '../../css/c/crznqgb3v.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pug4ir7hv"/><path class="crznqgb3v"/>`,
		"fallback": "lineicons:enter-down",
	});
}

export default Component;
