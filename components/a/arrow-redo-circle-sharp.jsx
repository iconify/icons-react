import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2b3vi6yu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2b3vi6yu"/>`,
		"fallback": "famicons:arrow-redo-circle-sharp",
	});
}

export default Component;
