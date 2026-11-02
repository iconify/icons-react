import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmv069b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmv069b-r"/>`,
		"fallback": "mingcute:currency-shekel-2-fill",
	});
}

export default Component;
