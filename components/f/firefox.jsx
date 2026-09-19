import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km7nv0b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km7nv0b_d"/>`,
		"fallback": "bxl:firefox",
	});
}

export default Component;
