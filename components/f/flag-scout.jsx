import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn85yfbuh.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn85yfbuh"/>`,
		"fallback": "ps:flag-scout",
	});
}

export default Component;
