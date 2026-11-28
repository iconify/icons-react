import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfrcz0m3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfrcz0m3v"/>`,
		"fallback": "noviair-light:circle-8",
	});
}

export default Component;
