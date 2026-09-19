import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_4vvvb_e.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_4vvvb_e"/>`,
		"fallback": "whh:cuthere",
	});
}

export default Component;
