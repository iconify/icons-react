import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic87zvbqj.css';
import '../../css/h/h-plcb8jm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic87zvbqj"/><path class="h-plcb8jm"/>`,
		"fallback": "lineicons:consulting",
	});
}

export default Component;
