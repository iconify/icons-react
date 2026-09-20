import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-xy5pb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-xy5pb0y"/>`,
		"fallback": "reicon:electricity",
	});
}

export default Component;
