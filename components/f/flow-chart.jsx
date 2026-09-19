import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2kiocawz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2kiocawz"/>`,
		"fallback": "fluent-mdl2:flow-chart",
	});
}

export default Component;
