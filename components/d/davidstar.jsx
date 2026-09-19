import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxxve5b1c.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxxve5b1c"/>`,
		"fallback": "whh:davidstar",
	});
}

export default Component;
