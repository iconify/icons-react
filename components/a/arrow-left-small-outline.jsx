import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loq8_m6rr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loq8_m6rr"/>`,
		"fallback": "teenyicons:arrow-left-small-outline",
	});
}

export default Component;
