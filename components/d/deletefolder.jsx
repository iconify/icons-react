import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fst7lybqp.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fst7lybqp"/>`,
		"fallback": "whh:deletefolder",
	});
}

export default Component;
