import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6m59nb7p.css';
import '../../css/y/yyfpz7bxh.css';
import '../../css/o/oiejv2yqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6m59nb7p"/><path class="yyfpz7bxh"/><path class="oiejv2yqa"/>`,
		"fallback": "bxs:file-doc",
	});
}

export default Component;
