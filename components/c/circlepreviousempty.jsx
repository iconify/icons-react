import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqsz9r1ts.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqsz9r1ts"/>`,
		"fallback": "whh:circlepreviousempty",
	});
}

export default Component;
