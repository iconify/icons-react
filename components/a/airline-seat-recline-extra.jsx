import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kega9ac9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kega9ac9c"/>`,
		"fallback": "mdi:airline-seat-recline-extra",
	});
}

export default Component;
