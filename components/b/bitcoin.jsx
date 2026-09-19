import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4cxdgfzy.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4cxdgfzy"/>`,
		"fallback": "formkit:bitcoin",
	});
}

export default Component;
