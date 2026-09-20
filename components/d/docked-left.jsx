import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm5wywbws.css';
import '../../css/q/ql13oqt-v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm5wywbws"/><path class="ql13oqt-v"/>`,
		"fallback": "oui:docked-left",
	});
}

export default Component;
