import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9cdcizyz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9cdcizyz"/>`,
		"fallback": "lineicons:display-alt",
	});
}

export default Component;
