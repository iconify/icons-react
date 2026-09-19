import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiqa0nbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiqa0nbwe"/>`,
		"fallback": "fe:home",
	});
}

export default Component;
