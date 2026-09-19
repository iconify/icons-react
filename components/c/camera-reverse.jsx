import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgoy5g6-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgoy5g6-n"/>`,
		"fallback": "famicons:camera-reverse",
	});
}

export default Component;
