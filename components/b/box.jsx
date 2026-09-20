import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffhh3qb8v.css';
import '../../css/s/sfre7fbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffhh3qb8v"/><path class="sfre7fbzt"/>`,
		"fallback": "token:box",
	});
}

export default Component;
