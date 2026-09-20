import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vph7o5b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vph7o5b0m"/>`,
		"fallback": "mdi:fire-hydrant-alert",
	});
}

export default Component;
