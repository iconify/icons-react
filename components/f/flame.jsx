import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj2xip8kj.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj2xip8kj"/>`,
		"fallback": "jam:flame",
	});
}

export default Component;
