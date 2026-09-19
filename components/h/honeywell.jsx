import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju1k4hbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju1k4hbss"/>`,
		"fallback": "cbi:honeywell",
	});
}

export default Component;
