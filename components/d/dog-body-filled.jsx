import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzv03fbgv.css';
import '../../css/k/kid6f5maa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzv03fbgv"/><path class="kid6f5maa"/>`,
		"fallback": "boxicons:dog-body-filled",
	});
}

export default Component;
