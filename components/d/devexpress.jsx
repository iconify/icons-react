import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds5x1fh_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds5x1fh_o"/>`,
		"fallback": "thesvg:devexpress",
	});
}

export default Component;
