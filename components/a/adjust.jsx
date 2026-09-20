import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzuim_b4r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzuim_b4r"/>`,
		"fallback": "zondicons:adjust",
	});
}

export default Component;
