import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty__8pbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty__8pbjv"/>`,
		"fallback": "thesvg:hack-club",
	});
}

export default Component;
