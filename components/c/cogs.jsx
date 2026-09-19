import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epgk7ub8d.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epgk7ub8d"/>`,
		"fallback": "fa-solid:cogs",
	});
}

export default Component;
