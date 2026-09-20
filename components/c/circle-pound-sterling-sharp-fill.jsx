import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j60a46bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j60a46bzm"/>`,
		"fallback": "keyline-icons:circle-pound-sterling-sharp-fill",
	});
}

export default Component;
