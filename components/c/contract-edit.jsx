import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz1r_1b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz1r_1b6b"/>`,
		"fallback": "noviair-light:contract-edit",
	});
}

export default Component;
