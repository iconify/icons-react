import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrz7kf1gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrz7kf1gc"/>`,
		"fallback": "stash:crown-light",
	});
}

export default Component;
