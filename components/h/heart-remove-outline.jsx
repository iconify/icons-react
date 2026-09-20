import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il_g3sssa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il_g3sssa"/>`,
		"fallback": "mdi:heart-remove-outline",
	});
}

export default Component;
