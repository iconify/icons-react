import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-i64oi4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-i64oi4y"/>`,
		"fallback": "file-icons:futhark",
	});
}

export default Component;
