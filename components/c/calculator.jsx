import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww_egybrg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww_egybrg"/>`,
		"fallback": "zondicons:calculator",
	});
}

export default Component;
