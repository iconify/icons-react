import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsun2obik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsun2obik"/>`,
		"fallback": "mingcute:bubble-line",
	});
}

export default Component;
