import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0n90cc4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0n90cc4m"/>`,
		"fallback": "noviair-light:bug-play",
	});
}

export default Component;
