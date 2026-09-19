import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exqy2qb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exqy2qb2s"/>`,
		"fallback": "boxicons:cable-car",
	});
}

export default Component;
