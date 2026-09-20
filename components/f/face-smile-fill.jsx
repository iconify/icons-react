import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybn8519xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybn8519xv"/>`,
		"fallback": "keyline-icons:face-smile-fill",
	});
}

export default Component;
