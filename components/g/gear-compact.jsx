import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg7ralbba.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg7ralbba"/>`,
		"fallback": "codicon:gear-compact",
	});
}

export default Component;
