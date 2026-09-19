import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofkr7ob2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofkr7ob2q"/>`,
		"fallback": "bi:bookmark-dash-fill",
	});
}

export default Component;
