import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouau9hbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouau9hbdd"/>`,
		"fallback": "thesvg-color:cairo-metro",
	});
}

export default Component;
