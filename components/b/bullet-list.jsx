import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4ti73b2k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4ti73b2k"/>`,
		"fallback": "streamline:bullet-list",
	});
}

export default Component;
