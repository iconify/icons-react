import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rugb_d0ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rugb_d0ld"/>`,
		"fallback": "noviair-light:archive-arrow-up",
	});
}

export default Component;
