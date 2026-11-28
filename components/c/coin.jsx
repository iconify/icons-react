import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj65s2s8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj65s2s8q"/>`,
		"fallback": "noviair-light:coin",
	});
}

export default Component;
