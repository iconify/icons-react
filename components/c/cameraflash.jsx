import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcncdub3x.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcncdub3x"/>`,
		"fallback": "whh:cameraflash",
	});
}

export default Component;
