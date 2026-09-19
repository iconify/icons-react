import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3tthjk-c.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3tthjk-c"/>`,
		"fallback": "whh:cassettealt",
	});
}

export default Component;
