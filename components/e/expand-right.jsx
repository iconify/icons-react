import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aesz2cvoz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aesz2cvoz"/>`,
		"fallback": "oi:expand-right",
	});
}

export default Component;
