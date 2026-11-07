import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goaxqgbme.css';
import '../../css/q/qpih9sbik.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goaxqgbme"/><path class="qpih9sbik"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-image-bold",
	});
}

export default Component;
