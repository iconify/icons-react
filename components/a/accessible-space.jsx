import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr_dv5t7u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr_dv5t7u"/>`,
		"fallback": "temaki:accessible-space",
	});
}

export default Component;
