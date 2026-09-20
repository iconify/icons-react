import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj9i59b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj9i59b2s"/>`,
		"fallback": "ri:headphone-line",
	});
}

export default Component;
