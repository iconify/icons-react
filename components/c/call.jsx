import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypj23acfe.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypj23acfe"/>`,
		"fallback": "whh:call",
	});
}

export default Component;
