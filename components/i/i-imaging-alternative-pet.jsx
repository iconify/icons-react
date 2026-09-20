import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg4w013as.css';
import '../../css/z/z0xcrnbqr.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg4w013as"/><path class="z0xcrnbqr"/>`,
		"fallback": "medical-icon:i-imaging-alternative-pet",
	});
}

export default Component;
