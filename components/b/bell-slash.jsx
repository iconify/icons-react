import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adb4xn-2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adb4xn-2w"/>`,
		"fallback": "oui:bell-slash",
	});
}

export default Component;
