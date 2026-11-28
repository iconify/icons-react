import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv2a0ygbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv2a0ygbj"/>`,
		"fallback": "noviair:carrot",
	});
}

export default Component;
