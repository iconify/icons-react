import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuhs32-ml.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuhs32-ml"/>`,
		"fallback": "fluent-mdl2:cycling",
	});
}

export default Component;
