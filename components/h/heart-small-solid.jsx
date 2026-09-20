import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap_4y_bzw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap_4y_bzw"/>`,
		"fallback": "teenyicons:heart-small-solid",
	});
}

export default Component;
