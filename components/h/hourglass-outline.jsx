import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozby7f9jz.css';
import '../../css/p/px_2rvbar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozby7f9jz"/><path class="px_2rvbar"/>`,
		"fallback": "famicons:hourglass-outline",
	});
}

export default Component;
