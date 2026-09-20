import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3k5j0b9w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3k5j0b9w"/>`,
		"fallback": "streamline-color:flash-1-flat",
	});
}

export default Component;
