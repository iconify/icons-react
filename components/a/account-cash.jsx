import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woh2ybu8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woh2ybu8a"/>`,
		"fallback": "mdi:account-cash",
	});
}

export default Component;
