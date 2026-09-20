import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y76ps7bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y76ps7bna"/>`,
		"fallback": "si:crop-fill",
	});
}

export default Component;
