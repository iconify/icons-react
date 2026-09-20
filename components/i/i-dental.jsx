import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed2rjpbba.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed2rjpbba"/>`,
		"fallback": "medical-icon:i-dental",
	});
}

export default Component;
