import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnfbg9tya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnfbg9tya"/>`,
		"fallback": "mdi:account-cog-outline",
	});
}

export default Component;
