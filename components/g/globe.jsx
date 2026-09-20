import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmv37bb5r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmv37bb5r"/>`,
		"fallback": "pinhead:globe",
	});
}

export default Component;
