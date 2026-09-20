import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj8mc-72s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj8mc-72s"/>`,
		"fallback": "temaki:bulletin-board",
	});
}

export default Component;
