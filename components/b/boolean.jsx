import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kff4x-c4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kff4x-c4l"/>`,
		"fallback": "meteor-icons:boolean",
	});
}

export default Component;
