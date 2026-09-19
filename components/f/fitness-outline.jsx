import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_9aq5btt.css';
import '../../css/k/k767t9bjs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_9aq5btt"/><path class="k767t9bjs"/>`,
		"fallback": "famicons:fitness-outline",
	});
}

export default Component;
