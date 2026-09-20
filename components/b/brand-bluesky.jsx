import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtjnp5e0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtjnp5e0e"/>`,
		"fallback": "tabler:brand-bluesky",
	});
}

export default Component;
