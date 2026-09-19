import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc5xdf2ha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc5xdf2ha"/>`,
		"fallback": "fluent-emoji-high-contrast:folding-hand-fan",
	});
}

export default Component;
