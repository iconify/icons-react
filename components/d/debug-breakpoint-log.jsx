import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waq4msb4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waq4msb4x"/>`,
		"fallback": "codicon:debug-breakpoint-log",
	});
}

export default Component;
