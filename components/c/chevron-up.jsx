import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3do5x6wg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3do5x6wg"/>`,
		"fallback": "memory:chevron-up",
	});
}

export default Component;
