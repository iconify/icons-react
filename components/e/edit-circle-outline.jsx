import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxo87q4fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxo87q4fu"/>`,
		"fallback": "mdi:edit-circle-outline",
	});
}

export default Component;
