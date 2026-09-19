import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8-5lw43z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8-5lw43z"/>`,
		"fallback": "fa6-solid:chart-column",
	});
}

export default Component;
