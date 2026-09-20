import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gayi84bjn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gayi84bjn"/>`,
		"fallback": "temaki:cyclist-crosswalk",
	});
}

export default Component;
