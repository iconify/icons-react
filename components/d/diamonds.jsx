import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du65znb8o.css';

const viewBox = {"width":895,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du65znb8o"/>`,
		"fallback": "whh:diamonds",
	});
}

export default Component;
