import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn2uc9buy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn2uc9buy"/>`,
		"fallback": "teenyicons:filter-outline",
	});
}

export default Component;
