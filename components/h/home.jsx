import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fntjwp6sx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fntjwp6sx"/>`,
		"fallback": "raphael:home",
	});
}

export default Component;
