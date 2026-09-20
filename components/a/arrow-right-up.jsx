import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqc7jrgdb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqc7jrgdb"/>`,
		"fallback": "memory:arrow-right-up",
	});
}

export default Component;
