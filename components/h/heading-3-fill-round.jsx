import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpgk-5brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpgk-5brr"/>`,
		"fallback": "coolicons:heading-3-fill-round",
	});
}

export default Component;
