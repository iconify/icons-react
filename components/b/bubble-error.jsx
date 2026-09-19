import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuj89ebij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuj89ebij"/>`,
		"fallback": "iconoir:bubble-error",
	});
}

export default Component;
