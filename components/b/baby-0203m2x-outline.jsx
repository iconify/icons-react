import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8ejirjck.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8ejirjck"/>`,
		"fallback": "healthicons:baby-0203m2x-outline",
	});
}

export default Component;
