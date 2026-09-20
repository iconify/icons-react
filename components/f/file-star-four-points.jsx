import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykqf3fvwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykqf3fvwe"/>`,
		"fallback": "mdi:file-star-four-points",
	});
}

export default Component;
