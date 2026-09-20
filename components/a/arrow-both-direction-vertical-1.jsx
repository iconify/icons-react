import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-0lfcb7u.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-0lfcb7u"/>`,
		"fallback": "lineicons:arrow-both-direction-vertical-1",
	});
}

export default Component;
