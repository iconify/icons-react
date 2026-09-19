import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq6_a9bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq6_a9bmt"/>`,
		"fallback": "guidance:hold-tight",
	});
}

export default Component;
