import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-6ptdbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-6ptdbrs"/>`,
		"fallback": "keyline-icons:circle-arrow-up-sharp-fill",
	});
}

export default Component;
