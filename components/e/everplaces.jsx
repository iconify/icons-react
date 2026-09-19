import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbf7t6bhf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbf7t6bhf"/>`,
		"fallback": "cib:everplaces",
	});
}

export default Component;
