import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da_ij5bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da_ij5bjn"/>`,
		"fallback": "thesvg:car-throttle",
	});
}

export default Component;
