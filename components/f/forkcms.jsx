import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pll558mvr.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pll558mvr"/>`,
		"fallback": "whh:forkcms",
	});
}

export default Component;
