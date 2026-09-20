import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkvk7nbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkvk7nbwk"/>`,
		"fallback": "mdi:house-minus-outline",
	});
}

export default Component;
