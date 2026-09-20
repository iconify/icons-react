import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk_dwhbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk_dwhbiv"/>`,
		"fallback": "mdi:book-favorite",
	});
}

export default Component;
