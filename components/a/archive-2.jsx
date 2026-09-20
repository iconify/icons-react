import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5d033baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5d033baa"/>`,
		"fallback": "reicon:archive-2",
	});
}

export default Component;
