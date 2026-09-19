import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whc-d3s-u.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whc-d3s-u"/>`,
		"fallback": "whh:cashregister",
	});
}

export default Component;
