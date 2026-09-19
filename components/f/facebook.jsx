import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tchbe2b0s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tchbe2b0s"/>`,
		"fallback": "dashicons:facebook",
	});
}

export default Component;
