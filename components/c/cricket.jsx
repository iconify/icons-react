import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az__ulu8c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az__ulu8c"/>`,
		"fallback": "maki:cricket",
	});
}

export default Component;
