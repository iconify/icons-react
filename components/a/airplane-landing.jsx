import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzo8gfbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzo8gfbgu"/>`,
		"fallback": "proicons:airplane-landing",
	});
}

export default Component;
