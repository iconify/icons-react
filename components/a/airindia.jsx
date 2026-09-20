import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leyozg8sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leyozg8sl"/>`,
		"fallback": "simple-icons:airindia",
	});
}

export default Component;
