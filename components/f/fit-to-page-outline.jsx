import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skuz2sbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skuz2sbgy"/>`,
		"fallback": "mdi:fit-to-page-outline",
	});
}

export default Component;
