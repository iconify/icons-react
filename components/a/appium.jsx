import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4o4izbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4o4izbgy"/>`,
		"fallback": "thesvg-color:appium",
	});
}

export default Component;
