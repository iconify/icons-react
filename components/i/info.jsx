import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd-w75bbu.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd-w75bbu"/>`,
		"fallback": "ls:info",
	});
}

export default Component;
