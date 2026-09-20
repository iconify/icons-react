import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e79veb9nt.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e79veb9nt"/>`,
		"fallback": "memory:box-light-round-down-right",
	});
}

export default Component;
