import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb0dzmjui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb0dzmjui"/>`,
		"fallback": "bx:bxs-customize",
	});
}

export default Component;
