import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiqbokbbo.css';
import '../../css/j/j0ryq4_tz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiqbokbbo"/><path class="j0ryq4_tz"/>`,
		"fallback": "carbon:help-filled",
	});
}

export default Component;
