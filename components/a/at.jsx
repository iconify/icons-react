import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fce-beu8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fce-beu8m"/>`,
		"fallback": "circum:at",
	});
}

export default Component;
