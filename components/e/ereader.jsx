import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp71m8bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp71m8bfx"/>`,
		"fallback": "mdi-light:ereader",
	});
}

export default Component;
