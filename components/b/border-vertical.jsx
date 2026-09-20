import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr23154xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr23154xf"/>`,
		"fallback": "uit:border-vertical",
	});
}

export default Component;
