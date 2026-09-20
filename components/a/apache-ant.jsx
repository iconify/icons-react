import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaqfuab8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaqfuab8c"/>`,
		"fallback": "thesvg-color:apache-ant",
	});
}

export default Component;
