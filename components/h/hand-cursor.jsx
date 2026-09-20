import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afg9v3b4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afg9v3b4u"/>`,
		"fallback": "streamline:hand-cursor",
	});
}

export default Component;
