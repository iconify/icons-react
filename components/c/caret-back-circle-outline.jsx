import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkkwb243e.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkkwb243e"/><path class="lsg5j7ibl"/>`,
		"fallback": "famicons:caret-back-circle-outline",
	});
}

export default Component;
