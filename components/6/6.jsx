import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4dlz885y.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4dlz885y"/>`,
		"fallback": "whh:6",
	});
}

export default Component;
