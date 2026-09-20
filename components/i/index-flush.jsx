import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc7w7oqjf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc7w7oqjf"/>`,
		"fallback": "oui:index-flush",
	});
}

export default Component;
