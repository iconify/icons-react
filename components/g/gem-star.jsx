import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouj2rlbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouj2rlbei"/>`,
		"fallback": "noviair-light:gem-star",
	});
}

export default Component;
