import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it_flsb6l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it_flsb6l"/>`,
		"fallback": "dashicons:admin-users",
	});
}

export default Component;
