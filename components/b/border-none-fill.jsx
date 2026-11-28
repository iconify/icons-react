import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc4u2xbwr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc4u2xbwr"/>`,
		"fallback": "pullo:border-none-fill",
	});
}

export default Component;
