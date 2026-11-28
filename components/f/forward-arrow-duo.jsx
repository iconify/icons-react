import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9xbjpe9s.css';
import '../../css/i/icurep0mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9xbjpe9s secondary"/><path class="icurep0mw primary"/>`,
		"fallback": "iconaut:forward-arrow-duo",
	});
}

export default Component;
