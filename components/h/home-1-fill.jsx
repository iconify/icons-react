import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcyxhlblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcyxhlblz"/>`,
		"fallback": "mingcute:home-1-fill",
	});
}

export default Component;
