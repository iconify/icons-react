import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfiukhcwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfiukhcwe"/>`,
		"fallback": "icon-park-outline:fire",
	});
}

export default Component;
