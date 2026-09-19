import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok4yy0jjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok4yy0jjh"/>`,
		"fallback": "guidance:alarm",
	});
}

export default Component;
