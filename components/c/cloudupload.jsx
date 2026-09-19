import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_xuckbhq.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_xuckbhq"/>`,
		"fallback": "whh:cloudupload",
	});
}

export default Component;
