import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg-i-abaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg-i-abaf"/>`,
		"fallback": "ri:align-item-horizontal-center-line",
	});
}

export default Component;
