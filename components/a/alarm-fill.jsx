import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp2zgn6iz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp2zgn6iz"/>`,
		"fallback": "bi:alarm-fill",
	});
}

export default Component;
