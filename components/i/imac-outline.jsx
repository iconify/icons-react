import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdtr9bfpm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdtr9bfpm"/>`,
		"fallback": "teenyicons:imac-outline",
	});
}

export default Component;
