import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ian1c-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ian1c-c"/>`,
		"fallback": "mdi:health-potion",
	});
}

export default Component;
