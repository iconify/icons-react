import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_0v8sb1u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_0v8sb1u"/>`,
		"fallback": "streamline:code-monitor-2-solid",
	});
}

export default Component;
