import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa2kh1q4z.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa2kh1q4z"/>`,
		"fallback": "memory:box-light-double-horizontal",
	});
}

export default Component;
