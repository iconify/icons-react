import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybqfy0iek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybqfy0iek"/>`,
		"fallback": "mdi:application-settings-outline",
	});
}

export default Component;
