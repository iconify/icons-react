import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4xqot16e.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4xqot16e"/>`,
		"fallback": "whh:bill",
	});
}

export default Component;
