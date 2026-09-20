import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cunpp8brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cunpp8brf"/>`,
		"fallback": "mdi:box-settings-outline",
	});
}

export default Component;
