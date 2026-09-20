import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2d-zbcwq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2d-zbcwq"/>`,
		"fallback": "zondicons:directions",
	});
}

export default Component;
