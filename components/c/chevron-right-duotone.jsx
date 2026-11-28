import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiwpa3b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiwpa3b3b primary"/>`,
		"fallback": "iconaut:chevron-right-duotone",
	});
}

export default Component;
