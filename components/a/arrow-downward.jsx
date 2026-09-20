import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3bc0lb3f.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3bc0lb3f"/>`,
		"fallback": "lineicons:arrow-downward",
	});
}

export default Component;
