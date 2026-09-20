import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7tc2pbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7tc2pbff"/>`,
		"fallback": "streamline-logos:elastic-stack-logo-solid",
	});
}

export default Component;
