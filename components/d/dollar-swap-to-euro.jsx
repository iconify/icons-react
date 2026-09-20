import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1qs6fb1h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1qs6fb1h"/>`,
		"fallback": "pinhead:dollar-swap-to-euro",
	});
}

export default Component;
