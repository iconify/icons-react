import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y20o_wd6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y20o_wd6v"/>`,
		"fallback": "iconaut:headphones-off-solid",
	});
}

export default Component;
