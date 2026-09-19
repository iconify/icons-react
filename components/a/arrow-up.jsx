import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag1m98bhs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag1m98bhs"/>`,
		"fallback": "foundation:arrow-up",
	});
}

export default Component;
