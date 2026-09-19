import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7qmfwi7v.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7qmfwi7v"/>`,
		"fallback": "whh:coppermine",
	});
}

export default Component;
