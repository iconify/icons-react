import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp6emhbkc.css';
import '../../css/t/ti4c50bay.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp6emhbkc"/><path class="ti4c50bay"/>`,
		"fallback": "lineicons:ambulance",
	});
}

export default Component;
