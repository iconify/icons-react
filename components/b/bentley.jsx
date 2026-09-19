import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5h4td7le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5h4td7le"/>`,
		"fallback": "cbi:bentley",
	});
}

export default Component;
