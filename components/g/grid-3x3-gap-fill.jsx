import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpb7l4b2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpb7l4b2l"/>`,
		"fallback": "bi:grid-3x3-gap-fill",
	});
}

export default Component;
