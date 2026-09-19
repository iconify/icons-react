import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0rpkbli.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0rpkbli"/>`,
		"fallback": "ls:help",
	});
}

export default Component;
