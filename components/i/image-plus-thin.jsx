import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzz7xk7cq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzz7xk7cq"/>`,
		"fallback": "pullo:image-plus-thin",
	});
}

export default Component;
