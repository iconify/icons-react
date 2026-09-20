import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnmfwi88a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnmfwi88a"/>`,
		"fallback": "mdi:delete-alert",
	});
}

export default Component;
