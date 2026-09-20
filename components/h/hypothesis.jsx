import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1-1rxr0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1-1rxr0n"/>`,
		"fallback": "thesvg-color:hypothesis",
	});
}

export default Component;
