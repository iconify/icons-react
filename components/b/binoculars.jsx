import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l815gt00n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l815gt00n"/>`,
		"fallback": "at-icons:binoculars",
	});
}

export default Component;
