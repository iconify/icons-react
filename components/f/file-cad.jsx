import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qef_2bcep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qef_2bcep"/>`,
		"fallback": "mdi:file-cad",
	});
}

export default Component;
