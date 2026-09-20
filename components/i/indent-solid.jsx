import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxdhj7bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxdhj7bwu"/>`,
		"fallback": "pixel:indent-solid",
	});
}

export default Component;
