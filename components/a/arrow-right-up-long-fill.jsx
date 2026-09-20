import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cno3tnb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cno3tnb_p"/>`,
		"fallback": "ri:arrow-right-up-long-fill",
	});
}

export default Component;
