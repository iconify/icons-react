import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft30jne3t.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft30jne3t"/>`,
		"fallback": "whh:deletealarm",
	});
}

export default Component;
