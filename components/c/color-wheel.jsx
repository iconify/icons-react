import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqih-abzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqih-abzz"/>`,
		"fallback": "boxicons:color-wheel",
	});
}

export default Component;
