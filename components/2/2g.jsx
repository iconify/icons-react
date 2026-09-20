import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t24unlyug.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t24unlyug"/>`,
		"fallback": "picon:2g",
	});
}

export default Component;
