import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lovh44bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lovh44bic"/>`,
		"fallback": "thesvg-color:coinmarketcap",
	});
}

export default Component;
