import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3rq2bbcu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3rq2bbcu"/>`,
		"fallback": "fluent-mdl2:calories",
	});
}

export default Component;
