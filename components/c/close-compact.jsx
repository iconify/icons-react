import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na7ncnoxx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na7ncnoxx"/>`,
		"fallback": "codicon:close-compact",
	});
}

export default Component;
