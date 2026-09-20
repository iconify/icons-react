import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tebu7d1rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tebu7d1rx"/>`,
		"fallback": "mdi:delete-forever",
	});
}

export default Component;
