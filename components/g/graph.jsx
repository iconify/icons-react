import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8vg3ubnt.css';

const viewBox = {"width":717,"height":648};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8vg3ubnt"/>`,
		"fallback": "ls:graph",
	});
}

export default Component;
