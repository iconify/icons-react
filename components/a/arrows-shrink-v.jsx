import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v367-ccpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v367-ccpm"/>`,
		"fallback": "uil:arrows-shrink-v",
	});
}

export default Component;
