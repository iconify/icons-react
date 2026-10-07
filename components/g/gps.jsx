import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngg5mbc4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngg5mbc4h"/>`,
		"fallback": "iconoir:gps",
	});
}

export default Component;
