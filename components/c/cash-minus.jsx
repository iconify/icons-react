import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czw58k73a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czw58k73a"/>`,
		"fallback": "mdi:cash-minus",
	});
}

export default Component;
