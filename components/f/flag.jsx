import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw9iszhry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw9iszhry"/>`,
		"fallback": "oui:flag",
	});
}

export default Component;
