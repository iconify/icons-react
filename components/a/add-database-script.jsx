import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p376rq-oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p376rq-oz"/>`,
		"fallback": "iconoir:add-database-script",
	});
}

export default Component;
