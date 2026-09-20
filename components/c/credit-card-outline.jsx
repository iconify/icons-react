import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w048f229i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w048f229i"/>`,
		"fallback": "teenyicons:credit-card-outline",
	});
}

export default Component;
