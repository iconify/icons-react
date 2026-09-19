import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcyu-v6zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcyu-v6zp"/>`,
		"fallback": "ci:chart-bar-horizontal-01",
	});
}

export default Component;
