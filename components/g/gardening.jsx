import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oof5z-bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oof5z-bfm"/>`,
		"fallback": "mdi:gardening",
	});
}

export default Component;
