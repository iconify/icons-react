import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qplp73bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qplp73bsf"/>`,
		"fallback": "mdi:content-save-alert",
	});
}

export default Component;
