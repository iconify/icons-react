import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajgk8lboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajgk8lboe"/>`,
		"fallback": "noviair:credit-card-plus",
	});
}

export default Component;
