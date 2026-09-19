import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnnt3_9du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnnt3_9du"/>`,
		"fallback": "heroicons:bug-ant",
	});
}

export default Component;
