import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ydlr8af.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l9ydlr8af"/>`,
		"fallback": "streamline:cane-alt-solid",
	});
}

export default Component;
