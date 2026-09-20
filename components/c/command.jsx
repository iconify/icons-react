import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozt0eux0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozt0eux0w"/>`,
		"fallback": "lucide:command",
	});
}

export default Component;
