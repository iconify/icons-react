import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cazfl1bbf.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cazfl1bbf"/>`,
		"fallback": "whh:emptycart",
	});
}

export default Component;
