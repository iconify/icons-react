import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llocwjb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llocwjb3k"/>`,
		"fallback": "noviair-light:bread-heart",
	});
}

export default Component;
