import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey3ifmspw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey3ifmspw"/>`,
		"fallback": "withicons:bookmark-check-gloss",
	});
}

export default Component;
