import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la-n7dbxn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la-n7dbxn"/>`,
		"fallback": "whh:anchor",
	});
}

export default Component;
