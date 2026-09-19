import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxlre3b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxlre3b6y"/>`,
		"fallback": "boxicons:git-pull-request",
	});
}

export default Component;
