import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m22e59wjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m22e59wjm"/>`,
		"fallback": "thesvg-color:decap-cms",
	});
}

export default Component;
