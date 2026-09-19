import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7i3mcv0e.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7i3mcv0e"/>`,
		"fallback": "whh:counteralt",
	});
}

export default Component;
