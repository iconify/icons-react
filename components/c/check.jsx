import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt0f51t9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt0f51t9x"/>`,
		"fallback": "oui:check",
	});
}

export default Component;
