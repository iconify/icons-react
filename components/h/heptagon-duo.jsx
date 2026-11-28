import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2dd_baz.css';
import '../../css/d/do9zq7gwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic2dd_baz secondary"/><path class="do9zq7gwa primary"/>`,
		"fallback": "iconaut:heptagon-duo",
	});
}

export default Component;
