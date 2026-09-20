import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq8pe9b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq8pe9b6f"/>`,
		"fallback": "mdi:delete-forever-outline",
	});
}

export default Component;
