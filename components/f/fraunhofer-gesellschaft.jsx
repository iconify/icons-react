import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwiq2935u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwiq2935u"/>`,
		"fallback": "thesvg-color:fraunhofer-gesellschaft",
	});
}

export default Component;
