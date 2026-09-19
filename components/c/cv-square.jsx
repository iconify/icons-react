import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpvoz4dby.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpvoz4dby"/>`,
		"fallback": "academicons:cv-square",
	});
}

export default Component;
