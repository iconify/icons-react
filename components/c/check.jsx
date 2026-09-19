import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nia-r680b.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nia-r680b"/>`,
		"fallback": "foundation:check",
	});
}

export default Component;
