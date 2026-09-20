import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0vwqibqx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0vwqibqx"/>`,
		"fallback": "lsicon:disable-outline",
	});
}

export default Component;
