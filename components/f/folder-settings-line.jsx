import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi6y_vvsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi6y_vvsa"/>`,
		"fallback": "ri:folder-settings-line",
	});
}

export default Component;
