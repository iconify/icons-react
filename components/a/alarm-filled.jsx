import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzvll5bhh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzvll5bhh"/>`,
		"fallback": "ix:alarm-filled",
	});
}

export default Component;
