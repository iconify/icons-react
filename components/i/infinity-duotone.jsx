import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtsse_bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtsse_bfw primary"/>`,
		"fallback": "iconaut:infinity-duotone",
	});
}

export default Component;
