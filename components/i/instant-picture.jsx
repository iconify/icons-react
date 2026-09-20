import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjl1bob8e.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjl1bob8e"/>`,
		"fallback": "jam:instant-picture",
	});
}

export default Component;
