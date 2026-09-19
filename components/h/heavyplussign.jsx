import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj507b3rh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj507b3rh"/>`,
		"fallback": "fxemoji:heavyplussign",
	});
}

export default Component;
