import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8evwhhab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8evwhhab"/>`,
		"fallback": "cbi:dreamcast",
	});
}

export default Component;
