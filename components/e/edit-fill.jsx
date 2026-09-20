import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i91rgtb8j.css';
import '../../css/w/wohdjobkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i91rgtb8j"/><path class="wohdjobkx"/>`,
		"fallback": "mage:edit-fill",
	});
}

export default Component;
