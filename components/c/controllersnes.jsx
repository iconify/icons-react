import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqrb4r1qy.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqrb4r1qy"/>`,
		"fallback": "whh:controllersnes",
	});
}

export default Component;
