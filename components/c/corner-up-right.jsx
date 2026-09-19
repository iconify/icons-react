import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yit344byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yit344byv"/>`,
		"fallback": "humbleicons:corner-up-right",
	});
}

export default Component;
