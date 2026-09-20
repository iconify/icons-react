import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elt0apgww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elt0apgww"/>`,
		"fallback": "raphael:future",
	});
}

export default Component;
