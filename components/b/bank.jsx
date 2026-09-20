import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6ztzx0-c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6ztzx0-c"/>`,
		"fallback": "streamline:bank",
	});
}

export default Component;
