import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-ys9t3q.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk-ys9t3q"/>`,
		"fallback": "fa:google",
	});
}

export default Component;
