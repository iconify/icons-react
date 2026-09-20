import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6wa-bbzd.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6wa-bbzd"/>`,
		"fallback": "maki:beer-11",
	});
}

export default Component;
