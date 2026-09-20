import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p770-7bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p770-7bjz"/>`,
		"fallback": "reicon:check-list",
	});
}

export default Component;
