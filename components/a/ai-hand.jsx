import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elr6iiype.css';
import '../../css/c/cycdfo7sy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elr6iiype"/><path class="cycdfo7sy"/>`,
		"fallback": "openmoji:ai-hand",
	});
}

export default Component;
