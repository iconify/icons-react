import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x63i9lbue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x63i9lbue"/>`,
		"fallback": "oui:index-open",
	});
}

export default Component;
