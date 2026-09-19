import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn8ep4exf.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn8ep4exf"/>`,
		"fallback": "whh:hospital",
	});
}

export default Component;
