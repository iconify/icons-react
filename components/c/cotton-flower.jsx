import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0cl4udwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0cl4udwk"/>`,
		"fallback": "game-icons:cotton-flower",
	});
}

export default Component;
