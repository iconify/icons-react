import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avh6a8bbm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avh6a8bbm"/>`,
		"fallback": "picon:fix",
	});
}

export default Component;
