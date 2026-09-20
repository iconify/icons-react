import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/felju3tpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="felju3tpw"/>`,
		"fallback": "mdi:image-filter",
	});
}

export default Component;
