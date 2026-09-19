import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mewrqqw9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mewrqqw9z"/>`,
		"fallback": "hugeicons:cloud-cog",
	});
}

export default Component;
