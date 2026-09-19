import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntw-pqr2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ntw-pqr2d"/>`,
		"fallback": "heroicons:arrow-turn-up-right-solid",
	});
}

export default Component;
