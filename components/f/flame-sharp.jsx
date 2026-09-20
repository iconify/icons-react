import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umfp6gevz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umfp6gevz"/>`,
		"fallback": "keyline-icons:flame-sharp",
	});
}

export default Component;
