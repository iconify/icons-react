import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe1mpsb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe1mpsb0s"/>`,
		"fallback": "ri:corner-up-left-double-fill",
	});
}

export default Component;
