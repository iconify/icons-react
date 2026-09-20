import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn5it8i0p.css';
import '../../css/a/az2bjjb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn5it8i0p"/><path class="az2bjjb4y"/>`,
		"fallback": "thesvg-color:dotenvx",
	});
}

export default Component;
