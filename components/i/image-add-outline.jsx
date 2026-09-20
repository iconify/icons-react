import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7h63_brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7h63_brn"/>`,
		"fallback": "mdi:image-add-outline",
	});
}

export default Component;
