import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlnzerbth.css';

const viewBox = {"width":2304,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlnzerbth"/>`,
		"fallback": "fa:asl-interpreting",
	});
}

export default Component;
