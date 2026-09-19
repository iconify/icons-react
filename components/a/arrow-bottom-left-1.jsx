import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnh2cebyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnh2cebyd"/>`,
		"fallback": "iconamoon:arrow-bottom-left-1",
	});
}

export default Component;
