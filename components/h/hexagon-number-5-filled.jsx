import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6f9kcbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6f9kcbdz"/>`,
		"fallback": "tabler:hexagon-number-5-filled",
	});
}

export default Component;
