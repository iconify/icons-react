import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi2203rfe.css';
import '../../css/p/pl1wuvfgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi2203rfe"/><path class="pl1wuvfgb"/>`,
		"fallback": "token:es",
	});
}

export default Component;
