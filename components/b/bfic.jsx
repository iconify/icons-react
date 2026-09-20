import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1gqmmbxi.css';
import '../../css/n/nzl6tpgjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1gqmmbxi"/><path class="nzl6tpgjh"/>`,
		"fallback": "token:bfic",
	});
}

export default Component;
