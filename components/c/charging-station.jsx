import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1lijt-zl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1lijt-zl"/>`,
		"fallback": "pinhead:charging-station",
	});
}

export default Component;
