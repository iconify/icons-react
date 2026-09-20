import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy2ermf1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy2ermf1s"/>`,
		"fallback": "tabler:cloud-dollar",
	});
}

export default Component;
