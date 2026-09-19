import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_6lzl0ye.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_6lzl0ye"/>`,
		"fallback": "ps:etsy",
	});
}

export default Component;
