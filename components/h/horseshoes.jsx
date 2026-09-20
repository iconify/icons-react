import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpc-6mina.css';
import '../../css/x/xczq1jt6l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpc-6mina"/><path class="xczq1jt6l"/>`,
		"fallback": "temaki:horseshoes",
	});
}

export default Component;
