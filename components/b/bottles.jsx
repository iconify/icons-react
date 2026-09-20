import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5h712et.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5h712et"/>`,
		"fallback": "temaki:bottles",
	});
}

export default Component;
