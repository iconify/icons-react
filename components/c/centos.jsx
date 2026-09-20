import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sknjbp8wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sknjbp8wm"/>`,
		"fallback": "thesvg:centos",
	});
}

export default Component;
