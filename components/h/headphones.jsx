import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh19iebjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh19iebjb"/>`,
		"fallback": "noviair:headphones",
	});
}

export default Component;
