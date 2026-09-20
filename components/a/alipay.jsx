import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx1b4ebgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx1b4ebgh"/>`,
		"fallback": "thesvg-color:alipay",
	});
}

export default Component;
