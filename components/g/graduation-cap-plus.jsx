import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n07ofsb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n07ofsb8x"/>`,
		"fallback": "noviair-light:graduation-cap-plus",
	});
}

export default Component;
