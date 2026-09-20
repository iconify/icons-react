import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm5wywbws.css';
import '../../css/e/e44nl67iq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm5wywbws"/><path class="e44nl67iq"/>`,
		"fallback": "oui:docked-bottom",
	});
}

export default Component;
