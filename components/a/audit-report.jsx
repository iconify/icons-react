import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flqx9-u3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flqx9-u3u"/>`,
		"fallback": "ix:audit-report",
	});
}

export default Component;
