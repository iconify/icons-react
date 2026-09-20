import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw5b5qa8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw5b5qa8o"/>`,
		"fallback": "ri:china-railway-fill",
	});
}

export default Component;
