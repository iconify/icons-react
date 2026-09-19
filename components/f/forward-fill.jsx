import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiz4bsboa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiz4bsboa"/>`,
		"fallback": "bi:forward-fill",
	});
}

export default Component;
