import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrp-v4bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrp-v4bks"/>`,
		"fallback": "mdi:images-outline",
	});
}

export default Component;
