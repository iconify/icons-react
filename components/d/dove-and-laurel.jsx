import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkj27dj0e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkj27dj0e"/>`,
		"fallback": "pinhead:dove-and-laurel",
	});
}

export default Component;
