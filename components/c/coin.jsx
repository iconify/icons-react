import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsfyxcbeq.css';
import '../../css/f/fjqlh3bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsfyxcbeq"/><path class="fjqlh3bxe"/>`,
		"fallback": "pixel:coin",
	});
}

export default Component;
