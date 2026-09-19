import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyyesibym.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyyesibym"/>`,
		"fallback": "fa7-solid:carriage-baby",
	});
}

export default Component;
