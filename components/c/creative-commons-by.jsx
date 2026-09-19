import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg7x33b0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg7x33b0s"/>`,
		"fallback": "cib:creative-commons-by",
	});
}

export default Component;
