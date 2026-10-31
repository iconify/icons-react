import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxm6xjm4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxm6xjm4i"/>`,
		"fallback": "coolicons:clipboard-close-fill-round",
	});
}

export default Component;
