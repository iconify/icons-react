import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yul4i8dug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yul4i8dug"/>`,
		"fallback": "noviair-light:briefcase-plus",
	});
}

export default Component;
