import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibjxqzb0k.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibjxqzb0k"/>`,
		"fallback": "octicon:circuit-board",
	});
}

export default Component;
