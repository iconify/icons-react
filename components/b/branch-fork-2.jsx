import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur2c4ccsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur2c4ccsm"/>`,
		"fallback": "proicons:branch-fork-2",
	});
}

export default Component;
