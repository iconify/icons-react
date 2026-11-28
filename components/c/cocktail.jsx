import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqq7r_8dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqq7r_8dq"/>`,
		"fallback": "noviair-light:cocktail",
	});
}

export default Component;
