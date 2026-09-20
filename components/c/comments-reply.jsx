import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jet3vgb5x.css';
import '../../css/i/ija69877e.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jet3vgb5x"/><path class="ija69877e"/>`,
		"fallback": "lineicons:comments-reply",
	});
}

export default Component;
