import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4okflb5a.css';
import '../../css/j/jardiabnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4okflb5a secondary"/><path class="jardiabnv primary"/>`,
		"fallback": "iconaut:cross-duo",
	});
}

export default Component;
