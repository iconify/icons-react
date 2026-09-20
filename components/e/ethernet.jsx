import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl5l6ibkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl5l6ibkg"/>`,
		"fallback": "mdi:ethernet",
	});
}

export default Component;
