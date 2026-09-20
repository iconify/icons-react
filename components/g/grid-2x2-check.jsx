import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljh_osb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljh_osb8l"/>`,
		"fallback": "lucide:grid-2x2-check",
	});
}

export default Component;
