import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smjuw0t8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smjuw0t8v"/>`,
		"fallback": "mdi:database-arrow-left-outline",
	});
}

export default Component;
