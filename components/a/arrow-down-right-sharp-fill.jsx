import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xown7vyye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xown7vyye"/>`,
		"fallback": "keyline-icons:arrow-down-right-sharp-fill",
	});
}

export default Component;
