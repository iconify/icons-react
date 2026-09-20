import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt-su-b9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt-su-b9l"/>`,
		"fallback": "ix:double-chevron-up",
	});
}

export default Component;
