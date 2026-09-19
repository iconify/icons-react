import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4nyf4b8k.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4nyf4b8k"/><path class="lsg5j7ibl"/>`,
		"fallback": "ion:caret-forward-circle-outline",
	});
}

export default Component;
