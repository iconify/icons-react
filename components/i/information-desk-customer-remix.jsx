import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydmcm7bou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydmcm7bou"/>`,
		"fallback": "streamline:information-desk-customer-remix",
	});
}

export default Component;
