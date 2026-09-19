import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0w00mqsl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0w00mqsl"/>`,
		"fallback": "foundation:alert",
	});
}

export default Component;
