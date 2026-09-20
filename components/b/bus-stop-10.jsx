import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5oq8rb2n.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5oq8rb2n"/>`,
		"fallback": "osmic:bus-stop-10",
	});
}

export default Component;
