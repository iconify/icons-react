import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecydh6bup.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecydh6bup"/>`,
		"fallback": "memory:border-right",
	});
}

export default Component;
