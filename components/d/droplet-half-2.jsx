import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd90nbc5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd90nbc5e"/>`,
		"fallback": "tabler:droplet-half-2",
	});
}

export default Component;
