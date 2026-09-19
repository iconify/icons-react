import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l15f58bue.css';
import '../../css/m/mxv0-rl9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l15f58bue"/><path class="mxv0-rl9y"/>`,
		"fallback": "carbon:equal-approximately",
	});
}

export default Component;
