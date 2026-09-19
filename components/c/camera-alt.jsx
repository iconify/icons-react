import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fon56od1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fon56od1l"/>`,
		"fallback": "dashicons:camera-alt",
	});
}

export default Component;
