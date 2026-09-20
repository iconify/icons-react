import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1wu8bb8d.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1wu8bb8d"/>`,
		"fallback": "lineicons:arrow-upward",
	});
}

export default Component;
