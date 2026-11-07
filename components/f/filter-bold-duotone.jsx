import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odsr5q1mz.css';
import '../../css/s/sp2z8f1qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="odsr5q1mz"/><path class="sp2z8f1qt"/>`,
		"fallback": "solar:filter-bold-duotone",
	});
}

export default Component;
