import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya0lp56gz.css';
import '../../css/c/ch8mp5-hu.css';
import '../../css/s/sopvr-3ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya0lp56gz"/><path class="ch8mp5-hu"/><path class="sopvr-3ry"/>`,
		"fallback": "token:akt",
	});
}

export default Component;
