import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_xf5hb9r.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_xf5hb9r"/>`,
		"fallback": "whh:handtwofingers",
	});
}

export default Component;
