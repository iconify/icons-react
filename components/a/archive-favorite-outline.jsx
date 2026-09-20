import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd6tf0onp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd6tf0onp"/>`,
		"fallback": "mdi:archive-favorite-outline",
	});
}

export default Component;
