import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt-qzxb6n.css';

const viewBox = {"width":717,"height":646};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt-qzxb6n"/>`,
		"fallback": "ls:cut",
	});
}

export default Component;
