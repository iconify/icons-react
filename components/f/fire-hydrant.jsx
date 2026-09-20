import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toypk4f0y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toypk4f0y"/>`,
		"fallback": "temaki:fire-hydrant",
	});
}

export default Component;
