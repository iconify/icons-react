import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnr5p9b_q.css';

const viewBox = {"width":600,"height":600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qnr5p9b_q"/>`,
		"fallback": "thesvg-color:codesandbox",
	});
}

export default Component;
