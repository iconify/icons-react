import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0ja_42gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0ja_42gd"/>`,
		"fallback": "mdi:head-sync",
	});
}

export default Component;
