import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgay69b_y.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgay69b_y"/>`,
		"fallback": "whh:flask",
	});
}

export default Component;
