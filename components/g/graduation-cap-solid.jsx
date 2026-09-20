import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx6-67b-c.css';
import '../../css/h/hk-cwxbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx6-67b-c"/><path class="hk-cwxbdt"/>`,
		"fallback": "stash:graduation-cap-solid",
	});
}

export default Component;
