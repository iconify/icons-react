import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8jmoab7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8jmoab7b"/>`,
		"fallback": "dashicons:database-remove",
	});
}

export default Component;
