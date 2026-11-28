import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn1w2eb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn1w2eb5u"/>`,
		"fallback": "iconaut:boxing-glove-solid",
	});
}

export default Component;
