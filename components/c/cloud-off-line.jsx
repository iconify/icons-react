import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om5-2ls3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om5-2ls3h"/>`,
		"fallback": "ri:cloud-off-line",
	});
}

export default Component;
