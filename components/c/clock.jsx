import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it60jpd0u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it60jpd0u"/>`,
		"fallback": "memory:clock",
	});
}

export default Component;
