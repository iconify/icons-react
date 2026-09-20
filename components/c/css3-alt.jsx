import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2fm2ws7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2fm2ws7n"/>`,
		"fallback": "la:css3-alt",
	});
}

export default Component;
