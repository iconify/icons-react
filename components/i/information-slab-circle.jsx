import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abhgn4b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abhgn4b7o"/>`,
		"fallback": "mdi:information-slab-circle",
	});
}

export default Component;
