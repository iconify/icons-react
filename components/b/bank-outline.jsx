import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miukfq3du.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miukfq3du"/>`,
		"fallback": "teenyicons:bank-outline",
	});
}

export default Component;
