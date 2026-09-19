import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x21_qv89q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x21_qv89q"/>`,
		"fallback": "hugeicons:ampoule",
	});
}

export default Component;
