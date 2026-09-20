import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy6k5wfmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy6k5wfmj"/>`,
		"fallback": "reicon:clipboard-text",
	});
}

export default Component;
