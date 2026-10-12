import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlvd9ykgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlvd9ykgq"/>`,
		"fallback": "garden:grid-3x3-fill-20",
	});
}

export default Component;
