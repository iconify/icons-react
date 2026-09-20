import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7_h__bhp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7_h__bhp"/>`,
		"fallback": "lineicons:bar-chart",
	});
}

export default Component;
