import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyvviob6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyvviob6s"/>`,
		"fallback": "noviair-light:flame",
	});
}

export default Component;
