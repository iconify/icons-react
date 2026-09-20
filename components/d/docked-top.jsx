import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm5wywbws.css';
import '../../css/v/v6mgv7b7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm5wywbws"/><path class="v6mgv7b7g"/>`,
		"fallback": "oui:docked-top",
	});
}

export default Component;
