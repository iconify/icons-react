import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6fqfab6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6fqfab6j"/>`,
		"fallback": "streamline-color:arrow-move-flat",
	});
}

export default Component;
