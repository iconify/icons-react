import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0qf59b7c.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0qf59b7c"/>`,
		"fallback": "whh:alignright",
	});
}

export default Component;
