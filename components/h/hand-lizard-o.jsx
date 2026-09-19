import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-xm_j6rv.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-xm_j6rv"/>`,
		"fallback": "fa:hand-lizard-o",
	});
}

export default Component;
