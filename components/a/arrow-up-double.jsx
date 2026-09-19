import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ityo7fbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ityo7fbjv"/>`,
		"fallback": "hugeicons:arrow-up-double",
	});
}

export default Component;
