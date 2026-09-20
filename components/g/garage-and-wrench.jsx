import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um98v6b5c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um98v6b5c"/>`,
		"fallback": "pinhead:garage-and-wrench",
	});
}

export default Component;
