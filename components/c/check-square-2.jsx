import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du_6b3bct.css';
import '../../css/a/apxnxjkhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du_6b3bct"/><path class="apxnxjkhh"/>`,
		"fallback": "lineicons:check-square-2",
	});
}

export default Component;
