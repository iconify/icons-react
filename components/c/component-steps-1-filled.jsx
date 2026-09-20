import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h13l7zvxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h13l7zvxr"/>`,
		"fallback": "tdesign:component-steps-1-filled",
	});
}

export default Component;
