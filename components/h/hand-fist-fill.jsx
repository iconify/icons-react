import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdtve49xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdtve49xz"/>`,
		"fallback": "mingcute:hand-fist-fill",
	});
}

export default Component;
